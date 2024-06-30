import PropTypes from "prop-types";
import downIcon from "../images/icon-down.svg";
import upIcon from "../images/icon-up.svg";

const FollowerChange = ({ count, aux }) => {
  const textColor = () => (count < 0 ? "text-brightRed" : "text-limeGreen");
  const iconImg = () => (count < 0 ? downIcon : upIcon);

  return (
    <div className="flex justify-center space-x-1">
      <img src={iconImg()} alt="Sign" className="object-contain" />

      <p className={`font-bold ${textColor()}`}>
        {Math.abs(count)} {aux}
      </p>
    </div>
  );
};

FollowerChange.propTypes = {
  count: <PropTypes className="number"></PropTypes>,
  aux: PropTypes.string.isRequired,
};

export default FollowerChange;
