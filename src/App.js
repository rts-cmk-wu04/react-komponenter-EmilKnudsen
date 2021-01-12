import './App.css';
import { useEffect, useState } from 'react';
import Cards from "./components/Cards";

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
  );
}
export default App;
