function Total({exercises}){
  return(
    <p>{exercises.reduce((prev, act) => prev + act)}</p>
  )
}

export default Total;