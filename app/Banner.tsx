import React, { SetStateAction } from "react";
import { X } from "lucide-react";

interface BannerProps {
  showBanner: boolean;
  setShowBanner: React.Dispatch<React.SetStateAction<boolean>>;
}

const Banner: React.FC<BannerProps> = ({ showBanner, setShowBanner }) => {
  if (!showBanner) return null;

  return (
    <div className={showBanner ? "block" : "hidden"}>
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-[#1264A3] rounded-full py-4 px-8  text-white">
        <p>
          Slack is your digital HQ. Meet the new features keeping teams connected in a
          work-from-anywhere world. <span className="underline cursor-pointer">Let's go →</span>
        </p>
        <button
          className="text-white hover:opacity-80"
          onClick={() => {
            setShowBanner(false);
          }}
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default Banner;
