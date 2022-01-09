import { React, useState } from "react";
import "./Accordion.css"
const Accordion = (Data) => {
    const contentOfCard = Data.Content;
    const [active, setActiveTo] = useState(false)
    const StateMonitor = () => {
        setActiveTo((prevState) => {
            if (prevState) {
                return false
            }
            else {
                return true;
            }
        })
    }
    return (
        <>
            <div className="accordion">
                <button onClick={StateMonitor}>{Data.Name}</button>
                <div className={`acco_cot ${ active ? "Active" : "notActive" } `}>
                    {contentOfCard.length > 0 && contentOfCard.map((ele,index) => {
                        return <h3 key={index}>{ele}</h3>
                    })}
                </div>
            </div>
        </>
    )
}
export default Accordion;