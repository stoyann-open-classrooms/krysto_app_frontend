import axios from 'axios'
const API_URL = 'http://localhost:5000/krysto/api/v1/messages'

const getMessages = async () => {
  const response = await axios.get(`${API_URL}`)
  return response.data
}
const getMessage = async (messageId) => {
  const response = await axios.get(`${API_URL}/${messageId}`)
  return response.data
}


const createMessage = async (messageData) => {

  const response = await axios.post(`${API_URL}`, messageData)
  return response.data
}



const messageService = {
  getMessages,
  getMessage,
  createMessage
}

export default messageService