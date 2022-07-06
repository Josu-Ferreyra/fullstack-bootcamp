import { useEffect, useState } from 'react';
import { Notification } from './Notification'
import { Filter } from './Filter';
import { AddPerson } from './AddPerson'
import { ShowPersons } from './ShowPersons'
import { getPersons, deletePersons } from './services/persons/persons'

function App() {
  const [filter, setFilter] = useState('')
  const [persons, setPersons] = useState([])
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    getPersons()
      .then(persons => setPersons(persons))
      .catch(() => setNotification({message:"Can't Get Persons from Server", error : true}))
  }, [persons.length])
  
  const deletePerson = (personId = '') => {
    const personSelected = persons.find( person => person.id === personId)
    if (window.confirm(`¿Eliminar a ${personSelected.name}?`)) {
      deletePersons(personId)
      setNotification({message:`Deleted ${personSelected.name}`, error : true})
      const newPersons = persons.filter( person => person.id !== personId)
      setPersons(newPersons)
    }
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification notification={notification} setNotification={setNotification}/>
      <Filter filter={filter} setFilter={setFilter} />
      <h2>add a new</h2>
      <AddPerson persons={persons} setPersons={setPersons} setNotification={setNotification}/>
      <h2>Numbers</h2>
      <ShowPersons persons={persons} filter={filter} deletePerson={deletePerson}/>
    </div>
  );
}

export default App;