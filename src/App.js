import './App.css';
import { useEffect, useState } from 'react';
import News from "./components/News";

function App() {
  var [newsContent, setNewsContent] = useState([]);

  useEffect(function() {
    fetch("./news.json")
      .then(function(response) {
        return response.json ();
      })
      .then (function(data) {
        setNewsContent(data);
      })
}, []);

  return (
    <div className="App">
      <div className="newsBox">
      <p className="newsHeader">LATEST NEWS</p>
      {newsContent.map(content => <News image={content.image} title={content.title} text={content.text} color={content.color} />)}
      <a href="#" className="newsLink">MORE NEWS</a>
    </div>
    </div>

  );
}
export default App;
