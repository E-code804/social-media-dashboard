import SocialMediaData from "../../data/SocialMediaData.json"
import MainCard from "./MainCard"

const MainDashboard = () => {
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {SocialMediaData.map((data, idx) => <MainCard key={idx} cardData={data} />)}
            </div>
        </div>
    )
}

export default MainDashboard