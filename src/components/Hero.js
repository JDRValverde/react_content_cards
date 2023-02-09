import React from "react";

export default function Hero() {
    return (
        <section className="hero">
            {/* Display image */}
            <img src="\uluru.jpg" className="hero--image" alt="" />
            {/* Display the header text */}
            <h1 className="hero--header">Online Experiences</h1>
            {/* Display the description text */}
            <p className="hero--text">Join unique interactive activities led by one of a kind developers</p>
        </section>
    )
}