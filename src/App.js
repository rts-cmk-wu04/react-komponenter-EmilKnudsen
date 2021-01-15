import './App.css';
import Virtual from './components/Virtual';


import { useEffect, useState } from 'react';
import Digest from "./components/Digest";
import Dest from "./components/Dest";
import LatestNews from './components/LatestNews';
import News from "./components/News"
import Places from "./components/Places";
import Collection from "./components/Collection";
import Cards from "./components/Cards";
import Travel from "./components/Travel";
import Outdoor from "./components/Outdoor";

function App() {
  var [collectionContent, setCollectionContent] = useState([]);
  var [digestContent, setDigestContent] = useState([]);
  var [cardsContent, setCardsContent] = useState([]);
  var [digestContent, setDigestContent] = useState([]);

  useEffect(function() {

    fetch("./digest.json")
      .then(function(response) {
        return response.json ();
      })
      .then (function(data) {
        setDigestContent(data);
      })

    fetch("./collection.json")
      .then(function(response) {
        return response.json ();
      })
      .then (function(data) {
        setCollectionContent(data);
      })

    fetch("./data.json")
      .then(function(response) {
        return response.json ();
      })
      .then (function(data) {
        setCardsContent(data);
      })

    fetch("./dest.json")
      .then(function(response) {
        return response.json ();
      })
      .then (function(data) {
        setDigestContent(data);
      })
        setDestContent(data);
}, []);

  return (
    <div className="allDigests">
      <div className="digestNews"><p className="digestNewsText">NEWS DIGEST</p></div>
      <div className="digestSection">
      {digestContent.map(content => <Digest text={content.text} title={content.title} number={content.number} color={content.color} />)}
      </div>

      <div className="allDests">
      {destContent.map(content => <Dest image={content.image} imgText={content.imgText} title={content.title} color={content.color} />)}
        </div>
    <div className="allCollections">
      {collectionContent.map(content => <Collection image={content.image} imgText={content.imgText} profile={content.profile} title={content.title} by={content.by} />)}
    </div>
    <div className="App">
      <div class="newsSection">
      <News title="FOOD & LIFESTYLE" image="./images/img5.png" color="#E44385" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam" />
      <News title="FASHION" image="./images/img6.png" color="#0AACDC" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam" />
      </div>
      {cardsContent.map(content => <Cards image={content.image} title={content.title} text={content.text} color={content.color} />)}
    </div>

    </div>
    <>
    <LatestNews/>
    <Places/>
    <div className="topSection">
    <Travel></Travel>
    <Outdoor></Outdoor>
     <Virtual></Virtual>
    </>
  );
}
export default App;
