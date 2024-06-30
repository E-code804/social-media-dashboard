import PropTypes from "prop-types";
import OverviewData from "../../data/OverviewData.json";
import SubCard from "./SubCard";

const SubDashboard = ({ isDarkMode }) => {
  return (
    <div className="container mx-auto">
      <h1 className={`${isDarkMode ? "overview-title-dark" : "overview-title-light"} text-xl font-bold mb-5`}>
        Overview - Today
      </h1>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {OverviewData.map((data, idx) => (
            <SubCard key={idx} cardData={data} isDarkMode={isDarkMode} />
          ))}
        </div>
      </div>
    </div>
  );
};

SubDashboard.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default SubDashboard;
