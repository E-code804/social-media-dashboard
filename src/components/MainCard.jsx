const MainCard = () => {
    const mockData = {
        platform: "Facebook",
        username: "nathanf",
        followers: 1987,
        dailyIncrease: 12,
    };

    const platformIcons = {
        Facebook: "/images/icon-facebook.svg",
        Twitter: "/images/icon-twitter.svg",
        Instagram: "/images/icon-instagram.svg",
        YouTube: "/images/icon-youtube.svg",
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
        <div>
            <div>
                <img src={platformIcons[mockData.platform]} />
                {/* Make this a component */}
                <p>{mockData.username}</p>
            </div>

            <div>
                <h1>{handleLargeNumber(mockData.followers)}</h1>
                {/* Make this a component */}
                <p>Followers</p>
            </div>

            {/* Make this a component */}
            <h1>{handleLargeNumber(mockData.dailyIncrease)}</h1>
        </div>
    );
};

export default MainCard;
