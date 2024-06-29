import { useState } from "react";
import Toggle from "./Toggle";

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const handleToggle = () => {
        setIsDarkMode(!isDarkMode)
    }

    return (
        <header className="flex justify-between items-center">
            <div>
                <h1 className="text-2xl font-bold text-lightVeryDarkText">Social Media Dashboard</h1>
                <p className="text-sm text-lightDarkGrayishText">Total Followers: 23,004</p>
            </div>

            <div className="flex items-center space-x-3">
                <p className="text-sm text-lightDarkGrayishText">{`${isDarkMode ? "Dark Mode" : "Light Mode"}`}</p>
                <Toggle handleToggle={handleToggle} isDarkMode={isDarkMode} />
            </div>
        </header>
    )
}

export default Header