import './App.css';
import LatestNews from './components/LatestNews';
import News from "./components/News"

function App() {

  return (
    <div className="App">
      <LatestNews/>
      <div class="newsSection">
      <News title="FOOD & LIFESTYLE" image="./images/img5.png" color="#E44385" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam" />
      <News title="FASHION" image="./images/img6.png" color="#0AACDC" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam" />
      </div>
    </div>

  );
}
export default App;
