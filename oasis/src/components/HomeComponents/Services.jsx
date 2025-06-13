import RCard from "../reusable/RCard";
import './Services.css'
import face from '../../assets/womanFace.jpg'
import head from '../../assets/head.jpg'
import back from '../../assets/woman.jpg'
function Services() {
    return(
        <div className="container">
            <div className="offers">
                Rejuvenation Services
            </div>
            <div className="row">
                <div className="column">
                    <RCard sn="Facials" pic={face}/>
                </div>
                <div className="column">
                    <RCard sn="Massages" pic={back}/>
                </div>
                <div className="column">
                    <RCard sn="Massages" pic={back}/>
                </div>
            </div>
        </div>
    )
}
export default Services;