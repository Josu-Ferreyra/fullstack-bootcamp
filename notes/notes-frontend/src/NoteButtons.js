import { deleteNote as deleteNoteAtServer } from './services/notes/notes'
export function NoteButtons ({ id, props }) {
  const { notes, setNotes } = props
  const deleteNote = (e) => {
    const idTargetNote = Number(e.target.id[0])
    const newNotes = notes.filter(note => note.id !== idTargetNote)
    setNotes(newNotes)
    deleteNoteAtServer(idTargetNote)
  }
  const changeImportance = (e) => {
    const idTargetNote = Number(e.target.id[0])
    const newNotes = notes.map(note => {
      if (note.id === idTargetNote) {
        note.important = !note.important
      }
      return note
    })
    console.log(newNotes)
  }
  return (
    <div>
      <button id={`${id}-delete`} onClick={deleteNote}>Eliminar</button>
      <button id={`${id}-importance`} onClick={changeImportance}>Cambiar Importancia</button>
    </div>
  )
}
