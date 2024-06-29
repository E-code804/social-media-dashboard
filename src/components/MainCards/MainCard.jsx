import PropTypes from "prop-types";
import FollowerChange from "./FollowerChange";

const MainCard = ({ cardData }) => {
    const { platform, username, followers, dailyIncrease } = cardData;
    const platformIcons = {
        Facebook: "/images/icon-facebook.svg",
        Twitter: "/images/icon-twitter.svg",
        Instagram: "/images/icon-instagram.svg",
        YouTube: "/images/icon-youtube.svg",
    };
    const borderStyle = {
        Facebook: "gradient-border-top-fb",
        Twitter: "gradient-border-top-tw",
        Instagram: "gradient-border-top-ig",
        YouTube: "gradient-border-top-yt",
    };

    const handleLargeNumber = (count) => {
        if (count >= 1_000_000_000) {
            return (count / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
        }
        if (count >= 1_000_000) {
            return (count / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
        }
        if (count >= 10_000) {
            return (count / 1_000).toFixed(1).replace(/\.0$/, "") + "k";
        }
        return count.toString();
    };

    return (
        <div
            className={`main-card-light py-6 space-y-5 rounded-md ${borderStyle[platform]} text-center text-lightDarkGrayishText`}
        >
            <div className="flex justify-center space-x-3">
                <img src={platformIcons[platform]} alt="Platform" className="object-contain" />
                <p>@{username}</p>
            </div>

            <div className="flex flex-col">
                <h1>{handleLargeNumber(followers)}</h1>
                <p className="text-lightDarkGrayishText followers">FOLLOWERS</p>
            </div>

            <FollowerChange count={handleLargeNumber(dailyIncrease)} />
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
};

export default MainCard;
