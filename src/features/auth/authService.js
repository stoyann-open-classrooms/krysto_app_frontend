import axios from 'axios'

const API_URL = 'http://localhost:5000/krysto/api/v1/auth'

// Register user
const register = async (userData) => {
  const response = await axios.post(
    API_URL + '/register',
    userData,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

// login user
const login = async (userData) => {
  const response = await axios.post( API_URL + '/login', userData)

  if (response.data) {
    localStorage.setItem('userToken', JSON.stringify(response.data.token))
 
  }
  return response.data
}

// Logout
const logout = () => {
  localStorage.removeItem('userToken')

}

const authService = {
  register,
  logout,
  login,
}

export default authService