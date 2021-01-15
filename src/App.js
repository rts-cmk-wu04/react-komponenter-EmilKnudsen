import { useEffect, useState } from 'react';
import Two from "./components/twoCards";

function App() {
  var [twoContent, setTwoContent] = useState([]);

  useEffect(function() {
    fetch("./twocards.json")
      .then(function(response) {
        return response.json ();
      })
      .then (function(data) {
        setTwoContent(data);
      })
}, []);

  return (
    <div className="allTwos">
      {twoContent.map(content => <Two image={content.image} text={content.text} color={content.color}/>)}
    </div>
  );
}
export default App;
