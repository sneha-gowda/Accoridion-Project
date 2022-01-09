import React from "react"
import Accordion from "./Accordion"
import "./App.css"
const App = () => {
  const ArrayOfObjects = [{ Name: "Topic1", Content: ["Content1", "Content2", "Content3"] }, { Name: "Topic2", Content: ["Content1", "Content2"] }, { Name: "Topic3", Content: ["Content1"] }]
  return (
    <>
      <div className="accordionContainer">
        {ArrayOfObjects.length > 0 && ArrayOfObjects.map((elem, index) => {
          return <Accordion Name={elem.Name} key={index} Content={elem.Content} />
        })
        }
      </div>
    </>
  )
}
export default App