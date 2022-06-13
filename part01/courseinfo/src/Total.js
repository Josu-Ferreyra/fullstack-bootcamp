function Total({course}){
  const exercises = course.parts.map(part => part.exercises);
  return(
    <p>{exercises.reduce((prev, act) => prev + act)}</p>
  )
}

export default Total;