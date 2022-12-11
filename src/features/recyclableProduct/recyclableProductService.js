import axios from 'axios'
const API_URL = 'http://localhost:5000/krysto/api/v1/recyclableproducts'

const getRecyclableProducts = async () => {
  const response = await axios.get(`${API_URL}`)
  return response.data
}
const getRecyclableProduct = async (recyclableProductId) => {
  const response = await axios.get(`${API_URL}/${recyclableProductId}`)
  return response.data
}



const recyclableProductService = {
  getRecyclableProducts,
  getRecyclableProduct,
}

export default recyclableProductService