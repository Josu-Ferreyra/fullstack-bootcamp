import axios from 'axios'
const baseUrl = 'http://localhost:3001'

async function getNotes () {
  const notes = await axios.get(`${baseUrl}/api/notes`)
  return notes.data
}
const postNote = (note) => axios.post(`${baseUrl}/api/notes`, note)
const deleteNote = (id) => axios.delete(`${baseUrl}/api/notes/${id}`)

export {
  getNotes,
  postNote,
  deleteNote
}
