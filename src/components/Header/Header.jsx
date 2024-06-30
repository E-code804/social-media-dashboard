import PropTypes from "prop-types";
import Toggle from "./Toggle";

const Header = ({ isDarkMode, handleToggle }) => {
  const pToggle = isDarkMode ? "text-whiteText" : "text-lightDarkGrayishText";

  return (
    <header className="container mx-auto flex flex-col justify-between items-start sm:flex-row sm:items-center">
      <div>
        <h1 className={`text-2xl font-bold ${isDarkMode ? "text-whiteText" : "text-lightVeryDarkText"}`}>
          Social Media Dashboard
        </h1>

        <p
          className={`text-base font-semibold ${isDarkMode ? "text-darkDesaturatedText" : "text-lightDarkGrayishText"}`}
        >
          Total Followers: 23,004
        </p>
      </div>

      <div className="w-full h-[1px] bg-lightDarkGrayishText my-4 sm:hidden" />

      <div className="flex justify-between w-full items-center space-x-3 sm:justify-normal sm:w-auto">
        <p className={`text-lg font-semibold ${pToggle}`}>{isDarkMode ? "Dark Mode" : "Light Mode"}</p>

        <Toggle handleToggle={handleToggle} isDarkMode={isDarkMode} />
      </div>
    </header>
  );
};

Header.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default Header;
