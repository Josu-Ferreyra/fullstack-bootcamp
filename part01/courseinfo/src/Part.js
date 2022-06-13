function Part({part}){
  const {name} = part
  const {exercises} = part
  return (
      <p>{name} {exercises}</p>
  )
}

export default Part;