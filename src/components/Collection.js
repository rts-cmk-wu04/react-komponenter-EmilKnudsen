import "./Collection.css";

export default function Collection({image, imgText, profile, title, by}) {
    return (
        <>
        <div className="collection">
        <img className="collectionImage" src={image} />
        <p className="collectionText">{imgText}</p>
        <img className="collectionProfile" src={profile} />
        <h2 className="collectionTitle">{title}</h2>
        <p className="collectionBy">{by}</p>
        </div>
        </>
    )
}