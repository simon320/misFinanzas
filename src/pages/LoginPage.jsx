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

    dispatch(emailAndPasswordLogin(email, password))
  };

  // const [nameUser, setNameUser] = useState("");
  // // const navigation = useNavigate();
  // const handleClick = (nameUser) => {
  //   dispatch(loginUser(nameUser));
  //   // navigation("/StartingAcount");
  // };

  return (
    <div>
      <h2 style={{ fontSize: "15px" }}>Login</h2>
      <h1>mis Finanzas</h1>
      <form onSubmit={handleEmailLogin}>
        <label>
          <input
            onChange={handleChange}
            value={email}
            name="email"
            type="text"
            placeholder="email"
          />
        </label>
        <label>
          <input
            onChange={handleChange}
            value={password}
            name="password"
            type="password"
            placeholder="password"
          />
        </label>
        <button
          type="submit"
          className="btn btn-info m-2"
        >
          Enviar
        </button>
        <hr />
        <GoogleButton onClick={handleGoogleLogin} />
        <Link to="/auth/register">Registrate presionando aqui</Link>

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
