//import SocialMediaData from "../data/SocialMediaData.json"

import MainCard from "./MainCard"

const MainDashboard = () => {
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-200 p-4">Item 1</div>
                <div className="bg-gray-200 p-4">Item 2</div>
                <div className="bg-gray-200 p-4">Item 3</div>
                <div className="bg-gray-200 p-4">Item 4</div>
                <div className="bg-gray-200 p-4">Item 5</div>
                <div className="bg-gray-200 p-4">Item 6</div>
                <MainCard />
            </div>
        </div>
    )
}

export default MainDashboard