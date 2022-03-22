import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";

//redux
import { useDispatch } from "react-redux";
// import { loginUser } from "../redux/actions/actions";
import { Link } from "react-router-dom";
import { emailAndPasswordLogin, googleLogin } from "../redux/actions/auth";

const LoginPage = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = data;

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };
  const dispatch = useDispatch();

  const handleGoogleLogin = () => {
    dispatch(googleLogin());
  };

  const handleEmailLogin = (e) => {
    e.preventDefault();

    if (email.trim() === "" || !email.trim().includes("@")) {
      return;
    }
    if (password.trim().length < 6) {
      return;
    }

    dispatch(emailAndPasswordLogin(email, password));
  };

  // const [nameUser, setNameUser] = useState("");
  // // const navigation = useNavigate();
  // const handleClick = (nameUser) => {
  //   dispatch(loginUser(nameUser));
  //   // navigation("/StartingAcount");
  // };

  return (
    <div className="container">
      <h1 className="title">mis Finanzas</h1>
      <form className="form-container" onSubmit={handleEmailLogin}>
        <label>
          <input
            onChange={handleChange}
            value={email}
            name="email"
            type="text"
            className="input input-email"
            placeholder="email"
          />
        </label>
        <label>
          <input
            onChange={handleChange}
            value={password}
            name="password"
            type="password"
            className="input"
            placeholder="password"
          />
        </label>
        <button type="submit" className="button">
          Entrar
        </button>
        <hr className="spliter-line" />
        <GoogleButton className="btn-google" onClick={handleGoogleLogin} />
        <div className="container-register">
          <h2 className="register"> ¿No tenes cuenta? </h2>
          <Link className="link-register" to="/auth/register">
            Registrate presionando <span className="span-register">aquí</span>.          
          </Link>
        </div>

        {/* <label>
          <input
            onChange={(e) => setNameUser(e.target.value)}
            value={nameUser}
            type="text"
            placeholder="Introduzca su nombre"
          />
        </label>
          <button
            type="button"
            className="btn btn-info m-2"
            onClick={() => handleClick(nameUser)}
          >
            Login
          </button> */}
      </form>
    </div>
  );
};

export default LoginPage;
