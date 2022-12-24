import axios from 'axios'
const API_URL = 'http://localhost:5500/krysto/api/v2/articleCategories'

const getArticleCategories = async () => {
  const response = await axios.get(`${API_URL}`)
  return response.data
}
const getArticleCategory = async (articleId) => {
  const response = await axios.get(`${API_URL}/${articleId}`)
  return response.data
}



const articleCategoryService = {
  getArticleCategories,
  getArticleCategory,
}

export default articleCategoryService