import { postPersons } from "./services/persons/persons"

export function AddPerson({persons, setPersons}) {
  
  const handleInputs = (e) => {
    const values = []
    for (let i = 0; i < e.target.length - 1; i ++){
      // console.log(e.target[i])
      values.push(e.target[i].value)
      e.target[i].value = ''
    }
    return values
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const [newName, newNumber] = handleInputs(e);
    const newPerson = {
      name : newName,
      number : newNumber
    }
    let isDuplicate = false;
    persons.forEach( person => {
      if (
        person.name === newPerson.name ||
        person.number === newPerson.number
      ){
        isDuplicate = true;
        return;
      }
    })
    isDuplicate
    ? alert(`${newPerson.name} is already added to phonebook`)
    : setPersons(prev => {
      postPersons(newPerson)
      return [...prev, newPerson]
    })    
  }

  return(
    <div>
      <h2>add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">name:</label>
          <input id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="number">number:</label>
          <input id="number" name="number" required/>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>    
  )
}