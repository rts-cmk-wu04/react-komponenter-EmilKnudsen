import './App.css';
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
      {cardsContent.map(content => <Cards image={content.image} title={content.title} text={content.text} color={content.color} />)}
    </div>
    <>
    <Places/>
    <div className="topSection">
    <Travel></Travel>
    <Outdoor></Outdoor>
    </>
  );
}
export default App;
