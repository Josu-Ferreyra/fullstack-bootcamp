export function Filter({filter, setFilter}){
  const handleFilter = (e) => {
    setFilter(e.target.value)
  }
  return(
    <div>filter shown with<input value={filter} onChange={handleFilter}/></div>
  )
}