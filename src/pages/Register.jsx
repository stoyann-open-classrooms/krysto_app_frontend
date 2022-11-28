import { useState } from "react";
import { FaUser } from "react-icons/fa";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const { name, email, password, password2 } = formData;

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Inscription
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
    </>
  );
}

export default Register;
