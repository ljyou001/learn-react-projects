export default function Card(props) {
    // Version 1:
    // let badgeText
    // if (props.openSpots === 0) {
    //     badgeText = "SOLD OUT"
    // } else if (props.country === "Online") {
    //     badgeText = "ONLINE"
    // }

    // return (
    //     <div className="card">
    //         {badgeText && <div className="card--badge">{badgeText}</div>}
    //         <img src={`./${props.img}`} className="card--image" />
    //         {/* <img src={`../images/${props.img}`} className="card--image" /> 
    //             {: getting into the javascript, originally in JSX
    //             `: quote something in the javascript
    //             ${xxx}: use the value in the props passed in */}
    //         <div className="card--stats">
    //             <img src="./star.png" className="card--star" />
    //             <span>{props.rating}</span>
    //             <span className="gray">({props.reviewCount}) • </span>
    //             <span className="gray">{props.country}</span>
    //         </div>
    //         <p>{props.title}</p>
    //         <p><span className="bold">From ${props.price}</span> / person</p>
    //     </div>
    // )

    // Version 2:
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`./${props.item.coverImg}`} className="card--image" />
            {/* <img src={`../images/${props.img}`} className="card--image" /> 
                {: getting into the javascript, originally in JSX
                `: quote something in the javascript
                ${xxx}: use the value in the props passed in */}
            <div className="card--stats">
                <img src="./star.png" className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}