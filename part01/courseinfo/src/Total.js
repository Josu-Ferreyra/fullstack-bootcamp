function Total({parts}){
  const exercises = parts.map(part => part.exercises);
  return(
    <p>{exercises.reduce((prev, act) => prev + act)}</p>
  )
}

export default Total;