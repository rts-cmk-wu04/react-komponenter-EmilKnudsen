import "./Times.css";

export default function Times({logo, text, color, header, link, background, textColor}) {
    return (
        <article className="times">
        <img alt="background" className="timesBackground" src={background} alt=""/>
        <div className="timesHead">
        <img alt="logo" className="timesLogo" src={logo} />
        <h2 className="timesHeader">{header}</h2>
        </div>
        <p style={{color: textColor}} className="timesText">{text}</p>
        <a style={{color: color}} className="timesLink" href="#">{link}</a>
        </article>
    )
}