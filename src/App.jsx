import Header from "./components/Header/Header";
import MainDashboard from "./components/MainCards/MainDashboard";
import SubDashboard from "./components/SubCards/SubDashboard";

import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`main-div space-y-10 h-full ${isDarkMode ? "bg-darkBg" : ""}`}>
      <Header isDarkMode={isDarkMode} handleToggle={handleToggle} />
      <MainDashboard isDarkMode={isDarkMode} />
      <SubDashboard isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
