import { motion } from 'framer-motion';
import React, {useState} from 'react';
import { GoSearch } from "react-icons/go";
import SearchIcon from "./SearchIcon.jsx";
import { RiCelsiusLine, RiFahrenheitLine } from 'react-icons/ri';
import DarkThemeButton from './DarkThemeButton';

const Header = ({
                    city,
                    handleCityChange,
                    handleGetWeather,
                    unitSystemToggle,

                }) => {

    const [darkMode, setDarkMode] = useState(false);

    const darkModeHandler = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark');
    }


    return (
        <div className="py-5 px-10 flex justify-center">
            <div className="m-auto flex">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className="mr-1 mt-auto mb-auto"
                >
                    <motion.button onClick={handleGetWeather}>
                        <SearchIcon />
                    </motion.button>
                </motion.div>
                <motion.input
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    type="text"
                    name="city"
                    value={city}
                    onChange={handleCityChange}
                    placeholder="Search city..."
                    className="border-[#d2d2d2] text-[#111] w-[350px]
            outline-none rounded-xl bg-[#EEF0F2] placeholder:text-[#111]
            font-extralight text-sm px-4 py-3
            shadow-sm dark:bg-[#1E1E1E] dark:placeholder:text-[#fcfcfc] dark:text-[#fcfcfc]"
                />
            </div>
            <div className="ml-auto mt-auto mb-auto">
                <label className="swap mr-5">
                    <input onChange={unitSystemToggle} type="checkbox" />
                    <div className="swap-on">
                        <RiFahrenheitLine className="text-xl text-[#111] dark:text-[#fff]" />
                    </div>
                    <div className="swap-off">
                        <RiCelsiusLine className="text-xl text-[#111] dark:text-[#fff]" />
                    </div>
                </label>
                <DarkThemeButton darkModeHandler={darkModeHandler} darkMode={darkMode} />
            </div>
        </div>
    );
};

export default Header;
