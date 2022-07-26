import axios from 'axios'
const baseUrl = '/api/notes'

async function getNotes () {
  const notes = await axios.get(`${baseUrl}`)
  return notes.data
}
const postNote = (note) => axios.post(`${baseUrl}`, note)
const deleteNote = (id) => axios.delete(`${baseUrl}/${id}`)

export {
  getNotes,
  postNote,
  deleteNote
}
