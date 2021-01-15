import "./twoCards.css";

export default function Dest({text, image, color}) {
    return (
        <article style={{backgroundColor: color}} className="twoCards">
          <img className="twoImage" src={image} alt=""/>
          <p className="twoText">{text}</p>
        </article>
    )
}