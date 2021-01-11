import './Outdoor.css';

function Outdoor() {
  return (
    <div className="outdoor">
        <img className="outdoorImg" src="./images/outdoor.png" alt="Outdoor Image"/>
        <div className="outdoorContent">
        <p className="outdoorP"><a className="outdoorLink" href="#">LEISURE</a></p>
        <h2 className="outdoorCategory">Outdoor Experience</h2>
        <p className="outdoorText">It’s windy. The cool breeze of the ocean. It <br/> gives, a sense of beauty, in motion. All is <br/> flowing, rushing and tide-And I sit in <br/> wonder, dreaming beside.</p>
        <div className="outdoorImages">
        <img className="outdoorImage" src="./images/outdoor1.png" alt="Outdoor Image"/>
        <img className="outdoorImage" src="./images/outdoor2.png" alt="Outdoor Image"/>
        <img className="outdoorImage" src="./images/outdoor3.png" alt="Outdoor Image"/>
        </div>
        </div>
    </div>
  );
}

export default Outdoor;
