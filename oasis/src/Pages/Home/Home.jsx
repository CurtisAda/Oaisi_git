import Banner from "../../components/HomeComponents/Banner";
import Services from "../../components/HomeComponents/Services";
import Welcome from "../../components/HomeComponents/Welcome";
import Locations from "../../components/HomeComponents/Locations";
function Home() {
    return(
        <div>
            <Banner />
            <Welcome />
            <Services />
            <Locations />
        </div>
    )
}

export default Home;