import axios from 'axios'
const path = 'http://localhost:3001/persons'

export const getPersons = () => (
  axios.get(path)
    .then(response => response.data)
  )
export const postPersons = (data) => axios.post(path, data)
export const deletePersons = (id) => axios.delete(`${path}/${id}`)
export const changeNumber = (data, id) => axios.put(`${path}/${id}`, data)