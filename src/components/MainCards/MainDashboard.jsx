import PropTypes from "prop-types";
import SocialMediaData from "../../data/SocialMediaData.json";
import MainCard from "./MainCard";

const MainDashboard = ({ isDarkMode }) => {
  return (
    <main className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {SocialMediaData.map((data, idx) => (
          <MainCard key={idx} cardData={data} isDarkMode={isDarkMode} />
        ))}
      </div>
    </main>
  );
};

MainDashboard.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default MainDashboard;
