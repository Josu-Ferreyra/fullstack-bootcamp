import { useState } from 'react'
import { postNote } from './services/notes/notes'

export function AddNotes ({ notes, setNotes }) {
  const [inputNote, setInputNote] = useState('')
  const genId = () => {
    let genId = 1
    const generator = () => Math.ceil(Math.random() * (notes.length + 10))
    // eslint-disable-next-line -- PARA IGNORAR LA ADVERTENCIA DEL WHILE
    while (notes.find(note => note.id === genId)) {
      genId = generator()
    }
    return genId
  }
  const handleOnChange = (e) => setInputNote(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault()
    const newNote = {
      id: genId(),
      content: inputNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5
    }
    setNotes(prev => [...prev, newNote])
    postNote(newNote)
    setInputNote('')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={inputNote} onChange={handleOnChange} />
        <button>Add Note</button>
      </form>
    </div>
  )
}
