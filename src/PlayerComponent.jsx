import React from "react";


export default function PlayerComponent(props) {

    const styles = {
        backgroundColor: props.isHeld ? "green" : "#1a1a1a"
    }

    return (
        <>
         <div className="squareStyle" style={styles} onClick={props.holdPlayer}>
            <img src={props.image} />
            <div className="info">
                <p>{props.position}</p>
                <p>{props.name}</p>
            </div>
        </div>

        </>
       
        
    )
}