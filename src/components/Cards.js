import React from "react";

export default function Cards(props) {
    // Declare a variable for the badge text
    let badgeText;

    // Check if the open spots are 0, if so, the badge text will be "SOLD OUT"
    if (props.card.openSpots === 0) {
        badgeText = "SOLD OUT";
    }
    // Check if the location is "Online", if so, the badge text will be "ONLINE"
    else if (props.card.location === "Online") {
        badgeText = "ONLINE";
    }

    return (
        <section className="cards">
            {/* Conditionally render the badge text */}
            {
                badgeText &&
                <div className="cards--badge">{badgeText}</div>
            }
            {/* Display the cover image */}
            <img src={props.card.coverImg} className="cards--image" alt="" />
            <div className="cards--stats">
                {/* Display the star icon */}
                <img src="\star.png" className="cards--star" alt="" />
                {/* Display the rating */}
                <span>{props.card.stats.rating}</span>
                {/* Display the review count */}
                <span className="cards--stats-gray">({props.card.stats.reviewCount}) • </span>
                {/* Display the location */}
                <span className="cards--stats-gray">{props.card.location}</span>
            </div>
            {/* Display the title */}
            <p className="cards--title">{props.card.title}</p>
            <p className="cards--price"><span className="cards--cost-bold">From ${props.card.price}</span> / Person</p>


        </section>
    )
}