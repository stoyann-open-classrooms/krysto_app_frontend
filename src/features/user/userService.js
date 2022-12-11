import axios from 'axios'
const API_URL = 'http://localhost:5000/krysto/api/v1/auth/me'

const config = { 
    headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem('userToken'))}`
    }
}


const getProfil = async () => {
 
  const response = await axios.get(`${API_URL}`, config)
  return response.data
}


const userService = {
  getProfil,

}

export default userService