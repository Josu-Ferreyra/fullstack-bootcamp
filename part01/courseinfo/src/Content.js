import Part from "./Part";

function Content({parts}){
  const part = parts.map(part => part)
  return(
    <div>
      <Part part={part[0]}/>
      <Part part={part[1]}/>
      <Part part={part[2]}/>
    </div>
  )
}

export default Content;