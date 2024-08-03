"use client";
import React, { useState } from "react";
import Image from "next/image";
import Google from "../../assets/imgs/google.png";

export interface HospitalCardProps {
  name: string;
  address: string;
  phone: string;
}

const HospitalCard: React.FC<HospitalCardProps> = ({ name, address, phone }) => {
  const handleOpenGoogleMaps = () => {
    const formattedAddress = address.replace(/\s/g, "+");
    const url = `https://www.google.com/maps/search/?api=1&query=${formattedAddress}`;
    window.open(url, "_blank");
  };

  const [copied, setCopied] = useState<boolean>(false);

  const copyToClipboard = () => {
    const textToCopy = `${name}\n${address}\n${phone}`;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset the "copied" state after 2 seconds
      })
      .catch((error) => console.error("Copy failed:", error));
  };

  return (
    <div className="max-w-sm p-4 bg-white flex flex-col justify-between border border-gray-200 rounded-lg hover:bg-gray-200">
      <div className="flex justify-end">
        <button onClick={handleOpenGoogleMaps} aria-label="Open in Google Maps">
          <Image className="cursor-pointer" src={Google} alt="maps" width={20} height={20} />
        </button>
      </div>
      <h5 className="mb-2 text-xl font-bold tracking-tight font-sans text-gray-800">
        {name}
      </h5>
      <p className="mb-3 text-sm font-normal text-gray-700 font-sans">
        {address}
      </p>
      <p className="mb-3 font-normal text-gray-700 font-sans">
        {phone}
      </p>
      <div className="flex">
        <button
          className="inline-flex items-center text-rose-950 hover:text-rose-700 btn btn-minimal focus:ring-2 focus:outline-none focus:ring-Secondary font-medium rounded-lg text-sm text-center mr-2 mb-2"
          onClick={copyToClipboard}
        >
          {copied ? "Copied" : "Copy address"}
        </button>
      </div>
    </div>
  );
};

export default HospitalCard;
