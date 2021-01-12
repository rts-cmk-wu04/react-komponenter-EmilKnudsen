import { useEffect, useState } from 'react';
import Collection from "./components/Collection";

function App() {
  var [collectionContent, setCollectionContent] = useState([]);

  useEffect(function() {
    fetch("./collection.json")
      .then(function(response) {
        return response.json ();
      })
      .then (function(data) {
        setCollectionContent(data);
      })
}, []);

  return (
    <div className="allCollections">
      {collectionContent.map(content => <Collection image={content.image} imgText={content.imgText} profile={content.profile} title={content.title} by={content.by} />)}
    </div>
  );
}
export default App;
