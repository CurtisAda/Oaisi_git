import './Banner.css'
import vid  from '../../assets/vid/msg.mp4'
function Banner() {
    return(
        <div className="B im">
            <video
        className="background-video"
        autoPlay
        loop
        muted
        disablePictureInPicture
        playsInline
        controls={false}
        tabIndex={-1}
      >
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="text-center-wrapper big-header con">
                <h5>
                    Oasis
                </h5>
                <h6 className='phrase'>
                    Find Your Inner Oasis
                </h6>
            </div>
        </div>
    )
}

export default Banner;