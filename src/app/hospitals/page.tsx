"use client";
import React, { useEffect, useState } from "react";
// Icons that handles the export and share function 
import { HiOutlineShare, HiOutlineDownload } from "react-icons/hi"; 
import HospitalList from "../hospitalList/hospitalList";
import Markdown from "../markdown/markdown";
import Dashboard from "../Dashboard/page";

// FOR THE SKELETON LOADING
const SkeletonCard: React.FC = () => (
  <div className="w-full p-20 grid gap-8 mb-4 grid-flow-col bg-gray-500  animate-pulse border border-gray-200 rounded-lg shadow md:flex md:max-w-full md:justify-between md:p-14">
    <div className="h-8 bg-gray-400 rounded w-full"></div>
    <div className="h-4 bg-gray-400 rounded w-full"></div>
    <div className="h-4 bg-gray-400 rounded w-full"></div>
  </div>
);



const MyHospitals: React.FC = () => {
  const [providers, setProviders] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(12);
  const [searchInput, setSearchInput] = useState<string>("");
  const [filteredProviders, setFilteredProviders] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchProviders = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("https://api.reliancehmo.com/v3/providers");
        const response = await res.json();
        if (isMounted) {
          setProviders(response?.data);
          setIsLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setError(error);
          setIsLoading(false);
        }
      }
    };

    fetchProviders();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const filtered = providers.filter((provider: any) => {
      const { name, state } = provider;
      const searchValue = searchInput.toLowerCase();
      return (
        name.toLowerCase().includes(searchValue) ||
        state.name.toLowerCase().includes(searchValue)
      );
    });
    setFilteredProviders(filtered);
  }, [searchInput, providers]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts = filteredProviders.length
    ? filteredProviders.slice(firstPostIndex, lastPostIndex)
    : providers.slice(firstPostIndex, lastPostIndex);

  const totalPages = Math.ceil(filteredProviders.length / postsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleShare = () => {
    if (navigator.share) {
      const shareData = {
        title: "Selected Providers",
        text: "Check out these selected providers!",
        url: window.location.href,
      };

      navigator
        .share(shareData)
        .then(() => {
          console.log("Successfully shared.");
        })
        .catch((error) => {
          console.error("Error sharing:", error);
        });
    } else {
      console.log("Web Share API not supported in this browser.");
    }
  };

  const exportToCSV = (data: any[]) => {
    if (!data.length) return;

    // Convert JSON data to CSV
    const headers = ["Name", "Address", "Phone"]; 
    const rows = data.map((item) =>
      [item.name, item.address, item.phone].join(",")
    ); 
    const csvContent = `data:text/csv;charset=utf-8,${[
      headers.join(","),
      ...rows,
    ].join("\n")}`;

    // Create a download link and click it programmatically
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "hospitals.csv");
    document.body.appendChild(link); // Required for FF
    link.click();
    document.body.removeChild(link); 
  };

  const handleExport = () => {
    exportToCSV(currentPosts);
  };

  //   FOR THE PAGINATION
  const pageNumbers = [1, 2];
  const showPrev = currentPage > 1;
  const showNext = currentPage < totalPages;

  return (
    <div>
      <nav>
        <Dashboard />
      </nav>
      <section className="bg-Primary py-20 h-auto w-auto ">
        <h2 className="text-Grey/800 text-2xl font-bold md:text-4 lg:text-3xl text-center mb-6 p-8 font-mono">
          Search <span className="text-rose-900">Hospitals</span> Here
        </h2>
        {/* Floating container */}
        <div className="container overscroll-auto box-border h-auto w-3/4 pb-4  m-auto  rounded-lg  md:w-full">
          <div className="p-2 flex flex-col items-center rounded-md gap-12">
            <form className="w-full md:w-full">
              <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-10 text-sm text-Grey/900 border border-Grey/600 rounded-lg bg-gray-50   dark:bg-white  dark:placeholder-gray-400  focus:outline-blue-500 "
                  placeholder="Search by city or state"
                  ext-sm
                  required
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
              </div>
            </form>
            {isLoading && (
              <p className="text-center text-gray-700">Please wait!!</p>
            )}
            <div className=" md:flex grid-cols-4  md:gap-4">
              {isLoading
                ? Array.from({ length: 4 }).map((_, index) => (
                    <SkeletonCard key={index} />
                  ))
                : null}
            </div>
            <div className="grid grid-row-4 gap-12">
              {!isLoading ? <HospitalList providers={currentPosts} /> : null}
            </div>
            <div className="flex justify-between items-center gap-4 w-full">
              <p className="font-medium text-sm text-gray-700 font-serif">
                Showing {filteredProviders.length} Locations
              </p>
              <div className="flex gap-4">
                <button
                  className="text-blue-500 text-2xl hover:text-blue-600"
                  onClick={handleExport}
                  aria-label="Export"
                >
                  <HiOutlineDownload />
                </button>
                <button
                  className="text-blue-500 text-2xl hover:text-blue-600"
                  onClick={handleShare}
                  aria-label="Share"
                >
                  <HiOutlineShare />
                </button>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {showPrev && (
                <button
                  className="bg-gray-300 py-2 px-4 rounded-md text-xs md:text-sm font-sans hover:bg-gray-400"
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  Prev
                </button>
              )}
              <button
                className={`py-2 px-4 rounded-md text-sm font-sans ${
                  currentPage === 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => handlePageChange(currentPage)}
              >
                {currentPage}
              </button>
              <button
                className={`py-2 px-4 rounded-md text-sm font-sans ${
                  currentPage + 1 <= totalPages
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                {currentPage + 1}
              </button>
              {showNext && (
                <button
                  className="bg-gray-300 py-2 px-4 rounded-md text-xs md:text-sm font-sans hover:bg-gray-400"
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="container box-border h-auto w-3/4 pb-4 m-auto rounded-lg">
          <Markdown />
        </div>
      </section>
    </div>
  );
};

export default MyHospitals;
