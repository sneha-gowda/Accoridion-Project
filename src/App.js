import {React,useState} from "react"
import Accordion from "./Accordion"
import "./App.css"
import Data from "./Data"
const App = () => {
  const [clicked, setClicked] = useState("0");

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0")
    }
    setClicked(index)
  };
 
  const ArrayOfObjects = Data
  return (
    <>
      <div className="accordionContainer">
        {ArrayOfObjects.length > 0 && ArrayOfObjects.map((elem, index) => {
          return <Accordion onToggle={ ()=>handleToggle(index)}
            active={clicked === index} key={index} Name={elem.Name}  Content={elem.Content} />
        })
        }
      </div>
    </>
  )
}
export default App