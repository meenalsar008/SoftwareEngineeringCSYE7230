import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";
import { register } from "../Redux/Actions/userActions";
// import Header from "./../components/Header";
import logo from '../images/ProjectLogo.png'


const Register = ({ location, history }) => {
  window.scrollTo(0, 0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;
  // var regExEmail = /([\w\.]+)*@northeastern.edu$/;
  // var regExPass= /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    // if(email=="" || password=="")
    //   {
    //     window.alert("Please make sure no field is empty!");
    //     return;
    //   }
    // else if(!email.trim().match(regExEmail))
    //   {
    //     window.alert("Please make sure you enter your northeastern email Id");
    //     return;
    //     }
    // else if(!password.trim().match(regExPass))
    //   {
    //     window.alert("Please make sure you enter a strong password!");
    //     return;
    //     }
    dispatch(register(name, email, password));
  };

  return (
    <>
      {/* <Header /> */}
      <div className="register">
        <div className="bgimg">
          <img src={logo} alt="logo" />
          <h1>Welcome to <br /> Northeastern Pharma!</h1>
        </div>
        <div className="form">
        <h1>Account Registration</h1>
        {error && <Message variant="alert-danger">{error}</Message>}
        {loading && <Loading />}
        <form
          className="Login"
          onSubmit={submitHandler}
        >
          <input
            type="text"
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Register</button>
          <p>
            <Link to={redirect ? `/login?redirect=${redirect}` : "/login"} className="supp">
              I Have Account <strong>Login</strong>
            </Link>
          </p>
        </form>
        </div>
      </div>
    </>
  );
};

export default Register;
