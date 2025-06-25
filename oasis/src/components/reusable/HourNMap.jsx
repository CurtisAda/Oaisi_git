import "./HourNMap.css"
function HourNMap(props) {
    const data = {
        sunCity : {
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.189918223895!2d-82.35578652374326!3d27.711421876180196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c329c39563e361:0x832b75778c63ca1a!2sGigi's%20Oasis%20Massage%20%26%20Wellness!5e0!3m2!1sen!2sus!4v1750713032611!5m2!1sen!2sus"
        },

        Riverview : {
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7059.216730409014!2d-82.3194229237411!3d27.79103897613468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2d6ba37875379:0x55fdcbb7418a1bf9!2sGigi's%20Oasis%20Massage%20%26%20Facials!5e0!3m2!1sen!2sus!4v1750715941817!5m2!1sen!2sus"
        }
    }
    console.log("here : ", data.sunCity.map);
    const getMap = () => {
        return data[props.place]?.map || "";
    }

    const daysOfTheWeek = ["Monday", "Tuesday", "Wensday", "Thursday", "Friday", "Saturday", "Sunday"];


    const sun_city = () => {
       return( daysOfTheWeek.map((day) => {
            if(props.place === "sunCity"){
                if(day !== "Saturday" && day !== "Sunday") {
                    return (
                        <li>
                            <p><span>{day}</span> 8A.M - 8P.M</p>
                        </li>
                    )
                } else if( day === "Sunday"){
                    return(
                        <li>
                            <p>Closed</p>
                        </li>
                    )
                } else {
                    return(
                        <li>
                            <p><span>{day}</span> 9A.M - 6P.M</p>
                        </li>
                    );
                }
            }else {
                if(day !== "Saturday" && day !== "Sunday"){
                    return(
                        <li>
                            <p><span>{day}</span> 8A.M - 6A.M</p>
                        </li>
                    );
                }
            }
        }));
    }
    
    return(
        <div className="hour-map fade-in">
            <div className="map">
                <iframe 
                className="m"
                width="auto"
                src={getMap()}
                height="450"
                allowfullscreen=""
                loading="lazy"
                ></iframe>
            </div>
            <div className="hour">
                <h3>
                    hours 
                </h3>
                <hr />
                <div className="hnd">
                    <div>
                        <ul>    
                            {sun_city()}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HourNMap;