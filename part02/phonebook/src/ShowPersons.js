export function ShowPersons ({persons, filter, deletePerson}) {
  return(
    <div>
      <ul>
        {persons
        .filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
        .map(person => 
          <div style={{display:"flex", gap: "20px"}} key={person.name}>
            <button onClick={() => deletePerson(person.id)}>Delete</button>
            <li>{person.name} {person.number}</li>
          </div>
          )}
      </ul>      
    </div>
  )
}