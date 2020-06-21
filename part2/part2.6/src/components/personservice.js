import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}
  
const create = (person) => {
    const request = axios.post(baseUrl, person)
    return request.then(response => response.data)
}
  
const update = (id, changed) => {
    const request = axios.put(`${baseUrl}/${id}`, changed)
    return request.then(response => response.data)
}

const erase = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

export default { getAll, create, update, erase }