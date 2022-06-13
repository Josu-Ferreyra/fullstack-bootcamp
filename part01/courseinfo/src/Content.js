import Part from "./Part";

function Content({course}){
  const part = course.parts.map(part => part)
  return(
    <div>
      <Part part={part[0]}/>
      <Part part={part[1]}/>
      <Part part={part[2]}/>
    </div>
  )
}

export default Content;