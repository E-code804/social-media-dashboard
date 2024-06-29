import { useState } from "react";
import Toggle from "./Toggle";

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const handleToggle = () => {
        setIsDarkMode(!isDarkMode)
    }

    return (
        <header className="flex flex-col justify-between items-start sm:flex-row sm:items-center">
            <div>
                <h1 className="text-2xl font-bold text-lightVeryDarkText">Social Media Dashboard</h1>
                <p className="text-sm text-lightDarkGrayishText">Total Followers: 23,004</p>
            </div>

            <div className="w-full h-[1px] bg-black my-4 sm:hidden" />

            <div className="flex justify-between w-full items-center space-x-3 sm:justify-normal sm:w-auto">
                <p className="text-sm text-lightDarkGrayishText">{`${isDarkMode ? "Dark Mode" : "Light Mode"}`}</p>
                <Toggle handleToggle={handleToggle} isDarkMode={isDarkMode} />
            </div>
        </header>
    )
}

export default Header