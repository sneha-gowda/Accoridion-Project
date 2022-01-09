import React from "react"
import Accordion from "./Accordion"
import "./App.css"
import Data from "./Data"
const App = () => {
  const ArrayOfObjects = Data
  return (
    <>
      <div className="accordionContainer">
        {ArrayOfObjects.length > 0 && ArrayOfObjects.map((elem, index) => {
          return <Accordion key={index} Name={elem.Name}  Content={elem.Content} />
        })
        }
      </div>
    </>
  )
}
export default App