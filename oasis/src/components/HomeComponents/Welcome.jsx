import './Welcome.css'
import MyImage from '../../assets/woman.jpg'

let text = "We are a locally owned Spa and operated out of Riverview and Sun City Center FL. We offer Massage and Facials at affordable pricing with great specials."

function Welcome() {
    return(
        <div className="wcontainer">
            <div className="left">
                <div>
                    Welcome
                </div>
                <div className='text-wrap'>
                    {text}
                </div>
            </div>
            <div className="right">
                <img src={MyImage} />
            </div>
        </div>
    );
}
export default Welcome;