import "./Menu.css";
function Menu(props) {
    return(
        <div className="menu-container">
            {props.location.map((loc, index) => (
                <div key={index} className="menu-item" onClick={() => props.onSelect(loc)}>
                    <p>{loc}</p>
                </div>
            ))}
        </div>
    );
}

export default Menu;