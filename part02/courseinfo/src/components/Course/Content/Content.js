import Part from "./Part/Part";
import Total from "./Total";

function Content({parts}){
  const totalExercises = parts.map(part => part.exercises)
  return(
    <div>
      {parts.map(part => <Part key={part.id} part={part}/>)}
      <Total exercises={totalExercises}/>
    </div>
  )
}

export default Content;