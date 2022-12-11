import axios from 'axios'
const API_URL = 'http://localhost:5000/krysto/api/v1/articles'

const getArticles = async () => {
  const response = await axios.get(`${API_URL}`)
  return response.data
}
const getArticle = async (articleId) => {
  const response = await axios.get(`${API_URL}/${articleId}`)
  return response.data
}



const articleService = {
  getArticles,
  getArticle,
}

export default articleService