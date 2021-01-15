import "./Places.css";
import background from "./background.png"

function Places() {
    return (
        <>
        <div className="places" style={{backgroundImage: `url(${background})`}}>
        <div className="placesLogoText">
        <img className="placesLogo" src="./images/logo.png" alt="logo" />
        <p className="placesIconText">THE NEW YORK TIMES</p>
        <img className="placesHeart" src="./images/heart.png" alt="heart" />
        </div>
        <h2 className="placesHeader">Must see places <br/>for summer</h2>
        <p className="placesText">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>Aliquam aliquam diam sit amet elit hendrerit rutrum. Nam</p>
        <img className="placesSlides" src="./images/slides.png" alt="slides" />
        </div>
        </>
    );
}

export default Places;