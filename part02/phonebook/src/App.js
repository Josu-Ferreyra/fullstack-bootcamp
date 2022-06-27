import { useState } from 'react';
import { Filter } from './Filter';
import { AddPerson } from './AddPerson'
import { Numbers } from './Numbers'

function App() {
  const [filter, setFilter] = useState('')
  const [persons, setPersons] = useState(
    [
      { name: 'Arto Hellas', number: '040-123456', id: 1 },
      { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
      { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
      { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ]
  )
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