//location selector
import { useState } from "react";
import Menu from "../reusable/Menu"
import "./Locations.css"
import HourNMap from "../reusable/HourNMap";
function Location() {

  const locationData = {
    sunCity : {
      title: "sun City"
    },
    Riverview : {
      title: "Riverview"
    }
  };

  const [selectedLocation, setSelectedLocation] = useState("sunCity");
  console.log("click: ", selectedLocation);

  return(
    <div className="LMcontainer">
      <div className="ll">location</div>
      <div className="Lcontainer">
        <Menu 
        location={Object.keys(locationData)}
        onSelect={setSelectedLocation}
        />
        <HourNMap place={selectedLocation}/>
      </div>
    </div>
  );
}
export default Location;