"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useDropzone } from "react-dropzone";
import {
  FaBold,
  FaItalic,
  FaLink,
  FaImage,
  FaUndo,
  FaFileDownload,
  FaSave,
  FaFolderOpen,
} from "react-icons/fa";
import { nanoid } from "nanoid";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function MarkdownEditor() {
  const [markdown, setMarkdown] = useState("");
  const [images, setImages] = useState<{ name: string; url: string }[]>([]);
  const [savedContents, setSavedContents] = useState<
    { id: string; content: string; images: { name: string; url: string }[] }[]
  >([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetch saved contents from localStorage on component mount
    const storedContents = JSON.parse(localStorage.getItem("markdownContents") || "[]");
    setSavedContents(storedContents);
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(event.target.value);
  };

  const addText = (syntax: string, placeholder: string) => {
    setMarkdown((prevMarkdown) => `${prevMarkdown}${syntax}${placeholder}${syntax}`);
  };

  const addLink = () => {
    setMarkdown((prevMarkdown) => `${prevMarkdown}[Link Text](http://example.com)`);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles: File[]) => {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          const base64data = reader.result as string;
          setImages((prevImages) => [
            ...prevImages,
            { name: file.name, url: base64data },
          ]);
        };
      });
    },
  });

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const resetMarkdown = () => {
    setMarkdown("");
    setImages([]);
  };

  const saveToPDF = async () => {
    const doc = new jsPDF();
    const previewElement = document.querySelector(".preview") as HTMLElement;
    if (previewElement) {
      const canvas = await html2canvas(previewElement);
      const imgData = canvas.toDataURL("image/png");
      doc.addImage(imgData, "PNG", 10, 10, 180, 160);
      doc.save("markdown.pdf");
    }
  };

  const saveToMarkdownFile = () => {
    const blob = new Blob([markdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "markdown.md";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const saveContent = () => {
    const newContent = {
      id: nanoid(),
      content: markdown,
      images: images,
    };
    const updatedContents = [...savedContents, newContent];
    setSavedContents(updatedContents);
    localStorage.setItem("markdownContents", JSON.stringify(updatedContents));
    alert("Content saved!");
  };

  const loadContent = (content: { content: string; images: { name: string; url: string }[] }) => {
    setMarkdown(content.content);
    setImages(content.images);
    setIsModalOpen(false); // Close the modal after selecting the content
  };

  const deleteContent = (id: string) => {
    const updatedContents = savedContents.filter((content) => content.id !== id);
    setSavedContents(updatedContents);
    localStorage.setItem("markdownContents", JSON.stringify(updatedContents));
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className="markdown-editor max-w-7xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        {/* <h1 className="text-2xl font-semibold text-gray-800">Markdown Support</h1> */}
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-sm font-sans md:text-lg font-medium text-gray-800 mb-2">Edit Your Content here</h2>

        <div className="flex flex-col md:flex-row">
          <div className="flex-1 p-2 md:w-1/2 flex flex-col">
            <div className="flex items-center space-x-2 mb-2">
              <button onClick={() => addText("**", "bold")} className="btn-icon" title="Bold">
                <FaBold />
              </button>
              <button onClick={() => addText("_", "italic")} className="btn-icon" title="Italic">
                <FaItalic />
              </button>
              <button onClick={addLink} className="btn-icon" title="Link">
                <FaLink />
              </button>
              <div {...getRootProps()} className="btn-icon" title="Image">
                <input {...getInputProps()} />
                <FaImage />
              </div>
              <button onClick={resetMarkdown} className="btn-icon" title="Reset">
                <FaUndo />
              </button>
              {/* <button onClick={saveToPDF} className="btn-icon" title="Download as PDF">
                <FaFileDownload />
              </button> */}
              <button onClick={saveToMarkdownFile} className="btn-icon" title="Download as Markdown">
                <FaFileDownload />
              </button>
              <button onClick={saveContent} className="btn-icon" title="Save Content">
                <FaSave />
              </button>
              <button onClick={toggleModal} className="btn-icon" title="View Contents">
                <FaFolderOpen />
              </button>
            </div>
            <textarea
              value={markdown}
              onChange={handleInputChange}
              placeholder="Write your markdown here..."
              rows={10}
              className="w-full p-2 border rounded focus:outline-none flex-1"
            />
          </div>

          <div className="flex-1 p-2 md:w-1/2 flex flex-col">
            {(markdown || images.length > 0) && (
              <div className="border p-2 rounded shadow-md bg-gray-50 flex-1">
                <h3 className="text-sm md:text-base font-medium text-gray-700 mb-2">Preview</h3>
                <div className="preview overflow-auto">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {markdown}
                  </ReactMarkdown>
                  {images.map((image, index) => (
                    <div key={index} className="relative mt-2">
                      <img
                        src={image.url}
                        alt={`uploaded-${index}`}
                        className="w-full h-auto border rounded"
                      />
                      <button
                        onClick={() => removeImage(index)}
                        className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded"
                        title="Remove"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-md max-w-lg w-full">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Saved Contents</h3>
            <ul>
              {savedContents.map((content) => (
                <li key={content.id} className="mb-2 flex items-center justify-between">
                  <button
                    onClick={() => loadContent(content)}
                    className="text-blue-600 hover:underline"
                  >
                    {content.id}
                  </button>
                  <button
                    onClick={() => deleteContent(content.id)}
                    className="text-red-500 hover:underline ml-4"
                    title="Delete Content"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={toggleModal}
              className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .markdown-editor {
          padding: 16px;
          background-color: #f5f5f5;
          min-height: 61vh;
        }
        .btn-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background-color: #f0f0f0;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .btn-icon:hover {
          background-color: #e0e0e0;
        }
        .h-full {
          height: 100%;
        }
        @media (max-width: 768px) {
          .flex-row {
            flex-direction: column;
          }
          .md\\:w-1\\/2 {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
