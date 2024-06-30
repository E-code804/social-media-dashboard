import PropTypes from "prop-types";

const FollowerChange = ({ count, aux }) => {
  const textColor = () => (count < 0 ? "text-brightRed" : "text-limeGreen");
  const iconImg = () => (count < 0 ? "/images/icon-down.svg" : "/images/icon-up.svg");

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
