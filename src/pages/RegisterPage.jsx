import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../redux/actions/auth";

// import { loginUser } from "../redux/actions/actions";

const RegisterPage = () => {
  //   const [nameUser, setNameUser] = useState("");
  //   // const navigation = useNavigate();
  //   const handleClick = (nameUser) => {
  //     dispatch(loginUser(nameUser));
  //     // navigation("/StartingAcount");
  //   };

  /////////////////////////////////////////////////////////////////////////////////////
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    username: "",
    password: "",
    password2: "",
  });

  const { email, username, password, password2 } = data;

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (email.trim() === "" || !email.trim().includes("@")) {
      return;
    }

    if (username.trim().length < 2) {
      return;
    }

    if (password.trim().length < 6) {
      return;
    } else {
      if (password.trim() !== password2.trim()) {
        return;
      }
    }

    dispatch(register(email, username, password));
  };

  return (
    <div>
      <h2 style={{ fontSize: "15px" }}>Registro</h2>
      <h1>mis Finanzas</h1>
      <form onSubmit={handleRegister}>
        <label>
          <input
            onChange={handleChange}
            value={email}
            type="email"
            placeholder="email"
            name="email"
          />
        </label>
        <label>
          <input
            onChange={handleChange}
            value={username}
            type="text"
            placeholder="Nombre de usuario"
            name="username"
          />
        </label>
        <label>
          <input
            onChange={handleChange}
            value={password}
            type="password"
            placeholder="password"
            name="password"
          />
        </label>
        <label>
          <input
            onChange={handleChange}
            value={password2}
            type="password"
            placeholder="Confirma el password"
            name="password2"
          />
        </label>
        <button type="submit" className="btn btn-info m-2">
          Enviar
        </button>
      </form>
      <hr />
      <Link to="/auth/login">Ingresa con tu cuenta</Link>
    </div>
  );
};

export default RegisterPage;
