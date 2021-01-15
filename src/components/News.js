import "./News.css";

export default function News({image, title, text, color}) {
    return (
        <>
        <div className="news">
        <img className="newsImage" src={image} alt="Logo"/>
        <div className="newsContent">
        <h2 style={{ color: color}} className="newsTitle">{title}</h2>
        <p className="newsText">{text}</p>
        </div>
        </div>
        </>
    )
}