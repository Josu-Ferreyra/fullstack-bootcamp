import { NoteButtons } from './NoteButtons'

export function ShowNotes ({ props }) {
  const { filterNotes, notes, setNotes } = props
  return (
    <div>
      <ul className='lista-notas'>
        {notes
          .filter(note => filterNotes ? note.important : note)
          .map(note => (
            <li key={note.id} className='note'>
              {note.content}
              <ul>
                <li>{note.date}</li>
              </ul>
              <NoteButtons id={note.id} props={{ notes, setNotes }} />
            </li>
          ))}
      </ul>
    </div>
  )
}
