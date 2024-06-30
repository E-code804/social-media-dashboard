import PropTypes from "prop-types";
import { handleLargeNumber, platformIcons } from "../../data/utils";
import FollowerChange from "../FollowerChange";

const SubCard = ({ cardData, isDarkMode }) => {
  const { platform, statistic, count, percent } = cardData;

  return (
    <div className={`${isDarkMode ? "main-card-dark" : "main-card-light"} cursor-pointer p-7 rounded-md`}>
      <div className="flex justify-between mb-8">
        <p className={isDarkMode ? "text-darkDesaturatedText" : "text-lightDarkGrayishText"}>{statistic}</p>
        <img src={platformIcons[platform]} alt="Platform" className="object-contain" />
      </div>

      <div className="flex justify-between items-center">
        <h1 className={isDarkMode ? "sub-count-dark" : "sub-count-light"}>{handleLargeNumber(count)}</h1>
        <span>
          <FollowerChange count={handleLargeNumber(percent)} aux="%" />
        </span>
      </div>
    </div>
  );
};

SubCard.propTypes = {
  cardData: PropTypes.shape({
    platform: PropTypes.string.isRequired,
    statistic: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired,
  }).isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default SubCard;
