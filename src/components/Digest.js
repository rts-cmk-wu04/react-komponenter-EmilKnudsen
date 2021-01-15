import "./Digest.css";

export default function Digest({text, title, number, color}) {
    return (
        <div className="Digest">
        <p style={{backgroundColor: color}} className="digestNumber">{number}</p>
        <h2 className="digestTitle">{title}</h2>
        <p className="digestText">{text}</p>
        </div>
    )
}