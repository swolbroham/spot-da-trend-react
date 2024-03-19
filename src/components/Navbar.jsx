import { useState } from "react";
import {
  PiListBold,
  PiHouseFill,
  PiHouseLight,
  PiLineSegmentsLight,
  PiLineSegmentsFill,
  PiVinylRecordLight,
  PiVinylRecordFill,
  PiMicrophoneStageLight,
  PiMicrophoneStageFill,
  PiXBold,
} from "react-icons/pi";

const pages = [
  {
    id: 0,
    name: "Home",
    href: "#home",
    iconOutline: <PiHouseLight className="size-8" />,
    iconSolid: <PiHouseFill className="size-8" />,
  },
  {
    id: 1,
    name: "Trends",
    href: "#trends",
    iconOutline: <PiLineSegmentsLight className="size-8" />,
    iconSolid: <PiLineSegmentsFill className="size-8" />,
  },
  {
    id: 2,
    name: "Albums",
    href: "#albums",
    iconOutline: <PiVinylRecordLight className="size-8" />,
    iconSolid: <PiVinylRecordFill className="size-8" />,
  },
  {
    id: 3,
    name: "Artists",
    href: "#artists",
    iconOutline: <PiMicrophoneStageLight className="size-8" />,
    iconSolid: <PiMicrophoneStageFill className="size-8" />,
  },
];

function NavBar() {
  const [currentPage, setCurrentPage] = useState("Home");
  const [toggleNavBar, setToggleNavBar] = useState(false);

  const toggleNav = () => {
    setToggleNavBar(!toggleNavBar);
  };

  function handleCurrentPage(page) {
    setCurrentPage(page);
  }

  return (
    <>
      <div className="absolute md:relative md:col-span-3 md:flex md:flex-col">
        <div className="fixed h-lvh w-full md:relative">
          <div className="w-full border-[1px] border-white bg-slate-800 px-5 pt-2 md:hidden">
            <button className="hover:cursor-pointer" onClick={toggleNav}>
              {toggleNavBar ? (
                <PiXBold className="size-8" color="white" />
              ) : (
                <PiListBold className="size-8" color="white" />
              )}
            </button>
          </div>
          <div className="h-full w-1/2 md:static md:w-full">
            <div
              className={`${
                toggleNavBar ? "visible" : "hidden md:block"
              } md:rounded-3xl md:relative flex flex-col bg-[#000] md:bg-[#121212] px-5 py-6 text-2xl font-semibold text-[#B3B3B3] h-full`}
            >
              <ul className="flex flex-col gap-2">
                {pages.map((page, index) => (
                  <li>
                    <div
                      className={`${
                        currentPage === page.name ? "text-white" : ""
                      }  flex flex-row space-x-2 leading-normal transition duration-300 ease-in-out hover:cursor-pointer hover:text-white`}
                      key={index}
                      onClick={() => handleCurrentPage(page.name)}
                      href={page.href}
                    >
                      <span>
                        {currentPage === page.name
                          ? page.iconSolid
                          : page.iconOutline}
                      </span>
                      <span className="w-full">{page.name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
