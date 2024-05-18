import axios from 'axios'

const api = axios.create({
  baseURL: "https://6647e0462bb946cf2f9f1acd.mockapi.io/"
})

export default api