import './RCard.css'
import head from '../../assets/head.jpg'
function RCard(props) {
    return (
        <section className='section-4'>
            <figure class="figure">
                <img src={props.pic} alt="" />
                <div>
                    <h3><span>{props.sn}</span></h3>
                    <a href="#"></a>
                </div>
            </figure>
        </section>
    )
}

export default RCard;