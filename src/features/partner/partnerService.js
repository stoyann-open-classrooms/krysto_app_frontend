import axios from 'axios'
const API_URL = 'http://localhost:5000/krysto/api/v1/partners'

const getPartners = async () => {
  const response = await axios.get(`${API_URL}`)
  return response.data
}
const getPartner = async (partnerId) => {
  const response = await axios.get(`${API_URL}/${partnerId}`)
  return response.data
}



const partnerService = {
  getPartners,
  getPartner,
}

export default partnerService