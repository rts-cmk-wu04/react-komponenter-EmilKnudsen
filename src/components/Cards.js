import "./Cards.css";

export default function Cards({image, title, text, color}) {
    return (
        <>
        <div className="cards" style={{backgroundColor: color}}>
        <p className="cardsP"><img className="cardsImage" src={image} /></p>
        <h2 className="cardsTitle">{title}</h2>
        <p className="cardsText">{text}</p>
        </div>
        </>
    )
}