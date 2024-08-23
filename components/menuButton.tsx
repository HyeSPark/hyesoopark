import React, { useState } from 'react';

interface MenuProps {
    isMenuOpen: boolean;
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MenuButton: React.FC<MenuProps> = ({isMenuOpen, setMenuOpen}) => {

    return (
        <div
            className={`md:hidden absolute top-9 right-8 w-6 h-6 z-50 transition duration-500 cursor-pointer`}
            onClick={() => setMenuOpen(!isMenuOpen)}
        >
            <div
                className={`absolute top-2 w-full h-[3px] transition duration-500 ${
                    isMenuOpen ? "bg-transparent" : "bg-black dark:bg-white"
                }`}
            ></div>
            <div
                className={`absolute top-0 w-full h-[3px] bg-black dark:bg-white transition duration-500 transform ${
                    isMenuOpen
                        ? "rotate-45 scale-x-[1.25] translate-y-[8px]"
                        : ""
                }`}
            ></div>
            <div
                className={`absolute top-4 w-full h-[3px] bg-black dark:bg-white transition duration-500 transform ${
                    isMenuOpen
                        ? "-rotate-45 scale-x-[1.25] -translate-y-[8px]"
                        : ""
                }`}
            ></div>
        </div>
    );
};

export default MenuButton;