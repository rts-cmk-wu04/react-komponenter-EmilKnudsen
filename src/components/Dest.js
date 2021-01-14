import "./Dest.css";

export default function Dest({imgText, title, color, image}) {
    return (
        <article className="dest">
          <img className="destImage" src={image} alt=""/>
          <h2 style={{ color: color}} className="destTitle">{title}</h2>
          <p className="destText">{imgText}</p>
        </article>
    )
}