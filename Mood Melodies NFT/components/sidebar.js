import React from "react";
import Link from "next/link";

import { TbMoodHeart } from "react-icons/tb";
import { SiGooglemarketingplatform } from "react-icons/si";
import {
  useAccount,
} from 'wagmi'
import { RiAddBoxLine, RiHeartFill, RiCloseLine } from "react-icons/ri";

const Sidebar = (props) => {
  const { address, connector, isConnected } = useAccount()
  const { showSidebar, setShowSidebar } = props;
  return (
    <div
      className={`bg-black fixed top-0 w-64 h-full p-6 flex flex-col justify-between ${
        showSidebar ? "left-0" : "-left-full"
      } md:left-0 transition-all duration-300 z-50`}
    >
      <div className="md:hidden absolute right-4 top-4 ">
        <button
          className="text-2xl p-2 box-content"
          onClick={() => setShowSidebar(false)}
        >
          <RiCloseLine />
        </button>
      </div>
      <div>
        <div className="mb-8 font-bold text-3xl">
          <span className="text-green-400">Mood</span> -{" "}
          <span className="text-blue-400">Melodies</span>
          <span className="text-yellow-400"> NFT</span>

        </div>
        <nav>
          <ul className="flex flex-col gap-y-4">
            <li>
              <a
                href="http://127.0.0.1:5002/"
               
                className="flex items-center gap-4 hover:text-yellow-500 transition-colors mt-2"
              >
                <TbMoodHeart className="text-2xl" /> Mood-Detection
              </a>
            </li>
            {address && (
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-4 hover:text-yellow-500 transition-colors mt-2"
                >
                  <SiGooglemarketingplatform className="text-2xl " />{" "}
                  NFT-Market-Place
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
      <div>
        <nav>
          <ul className="flex flex-col gap-y-2">
            <li>
              <Link href="/" className="text-xs hover:underline">
              Mood-Melodies-NFT's
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
