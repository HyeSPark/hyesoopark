"use client";

import React, {
    useState,
    createContext,
    SetStateAction,
    Dispatch,
    useEffect,
} from "react";
import MenuButton from "./menuButton";

export const menuNameContext = createContext<{
    menuName: string;
    setMenuName: Dispatch<SetStateAction<string>>;
}>({
    menuName: "", // Default value for the state
    setMenuName: () => {}, // Default value for the dispatch function (no-op)
});

const Header: React.FC = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [isNavUp, setNavUp] = useState(false);

    const delta = 5;
    const navbarHeight = 84; // Adjust this value based on your header height

    const dirLogo = "/logo.png";
    let arrHref = ["../projects", "../publications", "../about"];
    const arrMenu = ["Projects", "Publications", "About"];

    const handleScroll = () => {
        if (!isMenuOpen) {
            hasScrolled();
        }
    };

    const hasScrolled = () => {
        const st = document.documentElement.scrollTop;
        if (Math.abs(lastScrollTop - st) <= delta) return;

        const header = document.querySelector("header");
        if (header) {
            if (st > lastScrollTop && st > navbarHeight) {
                setNavUp(true);
            } else if (
                st + window.innerHeight <
                document.documentElement.scrollHeight
            ) {
                setNavUp(false);
            }
        }

        setLastScrollTop(st);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        if (lastScrollTop === 0) setNavUp(false);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollTop, isMenuOpen]);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add("overflow-y-hidden");
        } else {
            document.body.classList.remove("overflow-y-hidden");
        }
    }, [isMenuOpen]);

    return (
        <header
            className={`top-0 left-0 right-0 flex justify-between items-center transition duration-300 z-40
              md:sticky md:px-8 md:py-3 
              fixed p-4 
              bg-white dark:bg-slate-950
              ${
                isNavUp ? "-translate-y-full" : ""
            }`}
        >
            <a className="logo flex items-center p-4" href={"../"}>
                <div className="flex items-center">
                    <img src={dirLogo} width="32px" alt="Logo" />
                    <div className="text-2xl font-semibold pl-3">
                        Hye Soo Park
                    </div>
                </div>
            </a>
            <nav>
                <MenuButton isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
                <ul
                    className={`menu_list 
                      fixed top-0 left-0 w-full h-full 
                      bg-white dark:bg-slate-950 bg-opacity-80 backdrop-blur-lg pt-40 
                      md:flex md:relative md:bg-transparent md:w-auto md:h-auto 
                      md:backdrop-blur-none md:pt-0 md:transform-none md:transition-none md:ml-8
                      transition-transform duration-500 ${
                          isMenuOpen ? "translate-x-0" : "translate-x-full"
                      }`}
                >
                    {arrMenu.map((menu, index) => (
                        <li key={index} className="m-8 md:mr-6">
                            <a
                                href={arrHref[index]}
                                className="text-default_color dark:text-default_color_dark text-2xl font-semibold 
                                md:text-xl md:text-lg md:py-6 py-4 md:hover:text-main_color md:hover:dark:text-main_color_dark
                                transition-colors duration-200"
                            >
                                {menu}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
