import { useEffect, useState } from 'react';
import Digest from "./components/Digest";

function App() {
  var [digestContent, setDigestContent] = useState([]);

  useEffect(function() {
    fetch("./digest.json")
      .then(function(response) {
        return response.json ();
      })
      .then (function(data) {
        setDigestContent(data);
      })
}, []);

  return (
    <div className="allDigests">
      <div className="digestNews"><p className="digestNewsText">NEWS DIGEST</p></div>
      <div className="digestSection">
      {digestContent.map(content => <Digest text={content.text} title={content.title} number={content.number} color={content.color} />)}
      </div>
    </div>
  );
}
export default App;
