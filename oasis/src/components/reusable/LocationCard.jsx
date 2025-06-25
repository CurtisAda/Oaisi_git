import img from "../../assets/riverview.jpg"
import "./LocationCard.css"

function LocationCard() {
    return(
        <section class="locations-section">
            <div class="locations-container">
                <div class="location-card">
                    <img src={img} alt="San Francisco" />
                    <div class="location-name">San Francisco</div>
                </div>
            </div>
        </section>
    )
}

export default LocationCard;