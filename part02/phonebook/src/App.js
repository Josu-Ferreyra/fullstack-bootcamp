import { useEffect, useState } from 'react';
import { Filter } from './Filter';
import { AddPerson } from './AddPerson'
import { Numbers } from './Numbers'
import { getPersons } from './services/persons/persons'

function App() {
  const [filter, setFilter] = useState('')
  const [persons, setPersons] = useState([])

  useEffect(() => {
    getPersons()
      .then(response => setPersons(response.data))
  }, [persons.length])

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filter={filter} setFilter={setFilter} />
      <AddPerson persons={persons} setPersons={setPersons}/>
      <Numbers persons={persons} filter={filter}/>
    </div>
  );
}

export default App;