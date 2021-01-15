import { useEffect, useState } from 'react';
import Times from "./components/Times";

function App() {
  var [timesContent, setTimesContent] = useState([]);

  useEffect(function() {
    fetch("./times.json")
      .then(function(response) {
        return response.json ();
      })
      .then (function(data) {
        setTimesContent(data);
      })
}, []);

  return (
    <div className="allTimess">
      {timesContent.map(content => <Times logo={content.logo} header={content.header} text={content.text} link={content.link} background={content.background} />)}
    </div>
  );
}
export default App;
