"use client";
import Image, { StaticImageData } from "next/image";
import { useState, useMemo } from "react";
import Banner from "./Banner";
import { X } from "lucide-react";
import { Snackbar } from "@mui/joy";



import lonelyPlanet from "@/app/assest/lonelyPlanet.png";
import intuit from "@/app/assest/Intuite.png";
import carvana from "@/app/assest/carvana.png";
import kiva from "@/app/assest/kiva.png";
import careers from "@/app/assest/careers.png";
import devaCurl from "@/app/assest/DevaCurl.png";
import LandingImage from "@/app/assest/LandingPageImage.png";
import VideoThumbnail from "@/app/assest/VideoThumbnail.png";

type BrandType = {
  src: string|StaticImageData;
  alt: string;
  width: number;
  height: number;
};


const trustedBrands:BrandType[] = [
  { src: "https://d2fljktre9x5sw.cloudfront.net/wp-content/uploads/prod/2020/01/07014227/about-logo.png", alt: "Fox", width: 70, height: 70 },
  { src: lonelyPlanet, alt: "Lonely Planet", width: 120, height: 100 },
  { src: intuit, alt: "Intuit", width: 120, height: 60 },
  { src: carvana, alt: "Carvana", width: 160, height: 100 },
  { src: kiva, alt: "Kiva", width: 120, height: 60 },
  { src: careers, alt: "Target", width: 50, height: 20 },
  { src: devaCurl, alt: "DevaCurl", width: 150, height: 20 },
];

export default function Home() {
  const [showBanner, setShowBanner] = useState<boolean>(true);
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(true);

  return (
    <main className="min-h-screen bg-[#f4ede4]">
      <Banner showBanner={showBanner} setShowBanner={setShowBanner} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-[#1d1c1d] mb-6">
              Slack is where the future works
            </h1>
            <p className="text-lg text-gray-800 mb-8">
              Transform the way you work with one place for everyone and everything you need to get
              stuff done.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#611f69] hover:bg-[#4a1751] text-white px-4 py-2 rounded-[5px]">
                TRY FOR FREE
              </button>
              <button className="flex items-center text-white gap-2 bg-blue-500 px-4 py-2 rounded-[5px]">
                <div className="bg-white p-1">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
                    alt="Google"
                    width={20}
                    height={20}
                  />
                </div>
                SIGN UP WITH GOOGLE
              </button>
            </div>
          </div>

          <Image src={LandingImage} alt="Fox" width={670} height={70} />
        </div>
      </div>

      <div className="py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 md:grid-cols-7 gap-8 items-center justify-items-center">
            {trustedBrands.map(({ src, alt, width, height }) => (
              <Image key={alt} src={src} alt={alt} width={width} height={height} />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#f4ede4] pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-10">
          <Image src={VideoThumbnail} alt="Video" width={500} />
          <div>
            <h2 className="text-4xl font-bold text-[#1d1c1d] mb-6">
              Now is your moment to build a better tomorrow
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We've seen what the future can be. Now it's time to decide what it will be.
            </p>
            <button className="border-[#611f69] border-2 font-bold rounded px-4 py-2 text-[#611f69] transition-all duration-500 hover:bg-[#4a1751] hover:text-white">
              WATCH VIDEO
            </button>
          </div>
        </div>
      </div>

      <Snackbar open={openSnackbar} onClose={() => setOpenSnackbar(false)}>
        <div className="w-80">
          <button className="block ml-auto mr-1 " onClick={() => setOpenSnackbar(false)}>
            <X />
          </button>
          <p className="text-base text-justify ">
            This website uses cookies to enhance user experience and to analyze performance and
            traffic on our website. We also share information about your use of our site with our
            social media, advertising and analytics partners. More Info
          </p>
          <button className="bg-[#611f69] mt-2 mx-auto block w-full font-semibold text-lg rounded px-4 py-2 text-white transition-all duration-500 hover:bg-[#4a1751] hover:text-white">
            Accept All Cookies
          </button>
        </div>
      </Snackbar>
    </main>
  );
}
