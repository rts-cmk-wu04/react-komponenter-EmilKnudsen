import './App.css';

import LatestNews from './components/LatestNews';
import News from "./components/News"
import Places from "./components/Places";
import Collection from "./components/Collection";
import Cards from "./components/Cards";
import Travel from "./components/Travel";
import Outdoor from "./components/Outdoor";

function App() {

  useEffect(function() {
    fetch("./collection.json", "./data.json")
  var [collectionContent, setCollectionContent, cardsContent, setCardsContent] = useState([]);
    
      .then(function(response) {
        return response.json ();
      })
      .then (function(data) {
        setCollectionContent(data);
        setCardsContent(data);
      })
}, []);

  return (

    <div className="allCollections">
      {collectionContent.map(content => <Collection image={content.image} imgText={content.imgText} profile={content.profile} title={content.title} by={content.by} />)}
    </div>
    <div className="App">
      <div class="newsSection">
      <News title="FOOD & LIFESTYLE" image="./images/img5.png" color="#E44385" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam" />
      <News title="FASHION" image="./images/img6.png" color="#0AACDC" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam" />
      </div>
    </div>

      {cardsContent.map(content => <Cards image={content.image} title={content.title} text={content.text} color={content.color} />)}
    </div>
    <>
    <LatestNews/>
    <Places/>
    <div className="topSection">
    <Travel></Travel>
    <Outdoor></Outdoor>
    </>
  );
}
export default App;
