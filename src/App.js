import './App.css';

import Cards from "./components/Cards";
import Travel from "./components/Travel";
import Outdoor from "./components/Outdoor";

function App() {
  var [cardsContent, setCardsContent] = useState([]);

  useEffect(function() {
    fetch("./data.json")
      .then(function(response) {
        return response.json ();
      })
      .then (function(data) {
        setCardsContent(data);
      })
}, []);

  return (
    <div className="App">
      {cardsContent.map(content => <Cards image={content.image} title={content.title} text={content.text} color={content.color} />)}
    </div>
    <>
    <div className="topSection">
    <Travel></Travel>
    <Outdoor></Outdoor>
    </>
  );
}
export default App;
