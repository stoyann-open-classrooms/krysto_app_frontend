import axios from "axios";
const API_URL = "http://localhost:5500/krysto/api/v2/auth/me";
const API_URL2 = "http://localhost:5500/krysto/api/v2/users";

const config = {
  headers: {
    Authorization: `Bearer ${JSON.parse(localStorage.getItem("userToken"))}`,
  },
};

const getProfil = async () => {
  const response = await axios.get(`${API_URL}`, config);
  return response.data;
};




const getUsers = async () => {
  const response = await axios.get(`${API_URL2}`)
  return response.data
}
const getUser = async (userId) => {
  const response = await axios.get(`${API_URL2}/${userId}`)
  return response.data
}




const userService = {
  getProfil,
  getUsers,
  getUser
};

export default userService;
