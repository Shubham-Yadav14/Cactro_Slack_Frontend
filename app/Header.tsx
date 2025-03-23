"use client";
import React, { useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Search, ChevronDown } from "lucide-react";

type NavbarContentType = {
  label: string;
  path: string;
  dropdown?: boolean;
};

const Header: React.FC = () => {
  const router = useRouter();

  const navbarContent = useMemo<NavbarContentType[]>(
    () => [
      { label: "Product", path: "/product", dropdown: true },
      { label: "Enterprise", path: "/enterprise" },
      { label: "Resources", path: "/resources" },
      { label: "Pricing", path: "/pricing" },
    ],
    []
  );
  return (
    <nav className=" bg-[#f4ede4] z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Image
              src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png"
              alt="Slack"
              width={25}
              height={25}
              className="mr-2"
            />
            <div className="font-extrabold text-2xl">slack</div>
            <div className="hidden md:flex space-x-8 ml-10">
              {navbarContent.map((content) => (
                <button
                  key={content.label}
                  onClick={() => router.push(content.path)}
                  className="text-black font-semibold flex items-center hover:text-[#611f69]"
                >
                  {content.label}
                  {content.dropdown && <ChevronDown className="w-5 h-5" />}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4 z-20">
            <button className="p-2 text-black hover:text-gray-500">
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => router.push("/signin")}
              className="text-black hover:text-gray-900"
            >
              Sign in
            </button>
            <button
              onClick={() => router.push("/contact-sales")}
              className="border-[#611f69]  border-2 text-[#611f69] font-semibold transition-all duration-500 hover:text-white hover:bg-[#4a1751]  px-4 py-2 rounded"
            >
              TALK TO SALES
            </button>
            <button
              onClick={() => router.push("/signup")}
              className="bg-[#611f69] text-white hover:bg-[#3d1542] px-4 py-2 rounded"
            >
              TRY FOR FREE
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
