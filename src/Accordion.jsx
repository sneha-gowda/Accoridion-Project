import { React,useState} from "react";
import "./Accordion.css"
const Accordion = (Data) => {
    const [flexD,setFlexD]=useState("row");
    const [order,setOrder]=useState(0);
    const direction=(D)=>{
        if(D==="T" || D==="B"){
            setFlexD("column")
        }else{
            setFlexD("row")
        }
        if(D==="L" || D==="T"){
            setOrder(1)
        }else{
            setOrder(0)
        }
        Data.onToggle()
    }
    return (
        <>
            <div className="accordion" style={{ flexDirection:`${flexD}`}} >
                <div className="buttonns"  style={{backgroundColor:"white", order:`${order}`}}> 
                    <button  onClick={() =>{direction("T")}}>TOP</button>
                    <button onClick={() =>{ direction("B") }}>BOTTOM</button>
                    <button onClick={() => { direction("L") }}>LEFT</button>
                    <button onClick={() => { direction("R") }}>Right</button>
                </div>
                <div className={`accContent ${ Data.active ? "Active" :"" } `}>
                    <h3>{Data.Content}</h3>
                </div>
            </div>
        </>
    )
}
export default Accordion;
