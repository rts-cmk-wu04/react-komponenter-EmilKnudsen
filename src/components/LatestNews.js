import "./News.css";
import { useEffect, useState } from 'react';
import News from "./News"; 

export default function LatestNews() {

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
    <div className="newsBox">
      <p className="newsHeader">LATEST NEWS</p>
      {newsContent.map(content => <News image={content.image} title={content.title} text={content.text} color={content.color} />)}
      <a href="#" className="newsLink">MORE NEWS</a>
    </div>
    )
}