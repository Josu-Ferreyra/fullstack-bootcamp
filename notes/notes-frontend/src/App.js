import { useEffect, useState } from 'react'
import { AddNotes } from './AddNotes'
import { ShowNotes } from './ShowNotes'
import { FilterImportant } from './FilterImportant'
import { getNotes } from './services/notes/notes'
import './App.css'

function App () {
  const [notes, setNotes] = useState([])
  const [filterNotes, setFilterNotes] = useState(false)

  useEffect(() => {
    getNotes().then(notes => setNotes(notes))
  }, [])

  return (
    <div className='App'>
      <h1>Notes</h1>
      <FilterImportant props={{ filterNotes, setFilterNotes }} />
      <ShowNotes props={{ notes, setNotes, filterNotes }} />
      <AddNotes notes={notes} setNotes={setNotes} />
    </div>
  )
}

export default App
