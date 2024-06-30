import PropTypes from "prop-types";
import { borderStyle, handleLargeNumber, platformIcons } from "../../data/utils";
import FollowerChange from "../FollowerChange";

const MainCard = ({ cardData, isDarkMode }) => {
  const { platform, username, followers, dailyIncrease } = cardData;

  return (
    <div
      className={`${isDarkMode ? "main-card-dark" : "main-card-light"} py-6 space-y-5 rounded-md ${
        borderStyle[platform]
      } text-center cursor-pointer`}
    >
      <div className="flex justify-center space-x-3">
        <img src={platformIcons[platform]} alt="Platform" className="object-contain" />
        <p>@{username}</p>
      </div>

      <div className="flex flex-col">
        <h1 className={isDarkMode ? "main-followers-dark" : "main-followers-light"}>{handleLargeNumber(followers)}</h1>
        <p className={`${isDarkMode ? "text-darkDesaturatedText" : "text-lightDarkGrayishText"} followers`}>
          FOLLOWERS
        </p>
      </div>

      <FollowerChange count={handleLargeNumber(dailyIncrease)} aux="Today" />
    </div>
  );
};

MainCard.propTypes = {
  cardData: PropTypes.shape({
    platform: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    dailyIncrease: PropTypes.number.isRequired,
  }).isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default MainCard;
