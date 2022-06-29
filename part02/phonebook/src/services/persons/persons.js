import axios from 'axios'
const path = 'http://localhost:3001/persons'

export const getPersons = () => axios.get(path)
export const postPersons = (data) => axios.post(path, data)