import { useState } from "react";
import {toast} from 'react-toastify'
import { FaSignInAlt, FaUser } from "react-icons/fa";
import {useSelector , useDispatch} from "react-redux";
import  {login} from '../features/auth/authSlice'





function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if(!email) {
      toast.error('Vous devez entrer votre email !')
    }
    if(!password) {
      toast.error("Merci d'entrez un mot de passe !")
    }
    const userData = {
      email,
      password
    }
    dispatch(login(userData))
  };

  const { email, password} = formData;

  const dispatch = useDispatch()
  const {user, isLoading , isSuccess , message} = useSelector(state => state.auth)

  return (
    <div className="page-content">
      <section className="heading">
        <h1>
          <FaSignInAlt /> Ce connecter
        </h1>
        <p>Merci de créer un compte</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>

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
            <button className=" btn btn-block">Ce connecter</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Login;
