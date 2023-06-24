import React from "react";


export default function PlayerComponent(props) {
    return (
        <div className="squareStyle">
            <img src={props.item.image} />
        </div>
    )
}