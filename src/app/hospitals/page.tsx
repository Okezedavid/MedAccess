import React from 'react';
import Image from 'next/image'; // Import Image from next/image for optimized images
import surgery from "../../assets/imgs/surgery.jpg";

export default function Hospitals() {
    return (
        <div>
            <h1 className='py-8 text-base md:text-3xl flex justify-center font-semibold font-serif '>Search for Hospitals here</h1>
            
            {/* Image Container */}
            <div className="relative h-32 sm:h-40 md:h-48 lg:h-56">
                <Image
                    src={surgery}
                    alt="Surgery"
                    layout="fill" // Ensure the image fills the container
                    objectFit="cover" // Make sure the image covers the container without distortion
                    className="absolute inset-0"
                />
            </div>

            {/* Content Below the Image */}
            <div className="p-4">
            <select>
                 <option value="all">Select Region</option>
                  <option value="lagos">Lagos</option>
                  <option value="abuja">Abuja</option>
                  <option value="ogun">Ogun</option>
                  <option value="osun">Osun</option>
                  <option value="oyo">Oyo</option>
                  <option value="ondo">Ondo</option>
                  <option value="ekiti">Ekiti</option>
                  <option value="anambra">Anambra</option>
                  <option value="bauchi">Bauchi</option>
                  <option value="jos">Jos</option>
                  <option value="rivers">Rivers</option>
                  <option value="taraba">Taraba</option>
                  <option value="sokoto">Sokoto</option>
                  <option value="adamawa">Adamawa</option>
                  <option value="abia">Abia</option>
                  <option value="enugu">Enugu</option>
                  <option value="uyo">Uyo</option>
                  <option value="benue">Benue</option>
                  <option value="delta">Delta</option>
                  <option value="imo">Imo</option>
                  <option value="kwara">Kwara</option>
                  <option value="niger">Niger</option>
                  <option value="kano">Kano</option>
                  <option value="kaduna">Kaduna</option>
                  <option value="calabar">Calabar</option>
                  <option value="ebonyi">Ebonyi</option>
               </select>
            </div>
        </div>
    );
}
