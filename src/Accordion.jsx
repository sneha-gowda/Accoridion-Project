import { React, useState } from "react";
import "./Accordion.css"
const Accordion = (Data) => {
    // const contentOfCard = Data.Content;
    return (
        <>
            <div className="accordion">
                <button onClick={Data.onToggle}>{Data.Name}</button>
                <div className={`accContent ${ Data.active ? "Active" :"" } `}>
                    <h3>{Data.Content}</h3>
                </div>
            </div>
        </>
    )
}
export default Accordion;
