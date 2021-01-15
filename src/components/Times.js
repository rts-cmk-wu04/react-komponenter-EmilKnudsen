import "./Times.css";

export default function Times({logo, text, color, header, link, background}) {
    return (
        <>
        <article className="times">
        <div className="timesHead">
        <img alt="logo" className="timesLogo" src={logo} />
        <h2 className="timesHeader">{header}</h2>
        </div>
        <p className="timesText">{text}</p>
        <a className="timesLink" href="#">{link}</a>
        <p className="timesColor">{color}</p>
        <img alt="background" className="timesBackground" src={background} alt=""/>
        </article>
        </>
    )
}