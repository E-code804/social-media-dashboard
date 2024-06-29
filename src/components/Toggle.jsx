import PropTypes from "prop-types";

const Toggle = ({ handleToggle, isDarkMode }) => {
    return (
        <div className={`toggle-container ${isDarkMode ? "toggled" : ""}`} onClick={handleToggle}>
            <div className="toggle-button" />
        </div>
    )
}

Toggle.propTypes = {
    handleToggle: PropTypes.func.isRequired,
    isDarkMode: PropTypes.bool.isRequired
};

export default Toggle