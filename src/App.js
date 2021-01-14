import { useEffect, useState } from 'react';
import Dest from "./components/Dest";

function App() {
  var [destContent, setDestContent] = useState([]);

  useEffect(function() {
    fetch("./dest.json")
      .then(function(response) {
        return response.json ();
      })
      .then (function(data) {
        setDestContent(data);
      })
}, []);

  return (
    <div className="allDests">
      {destContent.map(content => <Dest image={content.image} imgText={content.imgText} title={content.title} color={content.color} />)}
    </div>
  );
}
export default App;
