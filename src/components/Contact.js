import React from "react";

export default function Contact(props) {
    return (
        <div className="contact-card">
            {/* Display the title */}
            <h3>{props.h3}</h3>
            <div className="info-group">
                {/* Display the name */}
                <p>{props.name}</p>
            </div>
            <div className="info-group">
                {/* Display the phone number */}
                <p>{props.phone}</p>
            </div>
        </div>
    )
}