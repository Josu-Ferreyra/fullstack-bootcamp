function Total({exercises}){
  const total = exercises.reduce((prev, act) => prev + act)
  return(
    <b>total of {total} exercises</b>
  )
}

export default Total;