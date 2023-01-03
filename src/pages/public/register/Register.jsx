import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
import { FaMarsStroke, FaUser } from "react-icons/fa";
import {useSelector , useDispatch} from "react-redux";
import  {register, reset} from '../../../features/auth/authSlice'




function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

const dispatch = useDispatch()
const navigate = useNavigate()
const {user, isLoading , isSuccess , message, isError} = useSelector(state => state.auth)



  useEffect(() => {
    if(isError) {
      toast.error(message)
    }
  // redirect when logged in 
  if(isSuccess || user) {
    navigate('/')

  }

  dispatch(reset())
  }, [isError, isSuccess, user, message, navigate, dispatch])
  



  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if(!name) {
      toast.error('Vous devez entrer votre nom !')
    }
    if(!email) {
      toast.error('Vous devez entrer votre email !')
    }
    if(password !== password2) {
      toast.error('Les mots de passe ne correspondent pas !')
    } else  { 
      const userData = {
        name,
        email,
        password
      }

      dispatch(register(userData))
    }

  };

  const { name, email, password, password2 } = formData;

  return (
    <div className="page-content">
      <section className="heading">
        <h1>
          <FaUser /> 
        </h1>
        <p>Merci de créer un compte</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              name="name"
              type="text"
              id="name"
              value={name}
              onChange={onChange}
              
              placeholder="Entrer votre nom"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              name="email"
              
              type="mail"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Entrer votre email"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              name="password"
              type="password"
              id="password"
              value={password}
              onChange={onChange}
              placeholder="Entrer votre mot de passe"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              name="password2"
              type="password"
              id="password2"
              value={password2}
              onChange={onChange}
              placeholder="Confirmer votre mot de passe"
            />
          </div>
          <div className="form-group">
            <button className=" btn btn-block">S'inscrire</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Register;
