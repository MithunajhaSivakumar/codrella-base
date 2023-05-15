import React, { useState } from "react";
import NavBar from "../../components/Navbar/Navbar";
import "./LoginPage.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { logIn } from "../../action/auth"

function LoginPage() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate()

  function login(e) {
    e.preventDefault();
    console.log(form);
    dispatch(logIn(form, navigate));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  return (
    <div>
      <main>
        <section id="login-section">
          <div className="color"></div>
          <div className="color"></div>
          <div className="color"></div>

          <div className="box">
            <div className="square" style={{ "--i": 0 }}></div>
            <div className="square" style={{ "--i": 1 }}></div>
            <div className="square" style={{ "--i": 2 }}></div>
            <div className="square" style={{ "--i": 3 }}></div>
            <div className="square" style={{ "--i": 4 }}></div>

            <div className="container" id="login-form">
              <div className="form">
                <h2>Login Form</h2>
                <form action="">
                  <div className="inputBox">
                    <input type="text" name="username" placeholder="Username" onChange={handleChange}/>
                  </div>

                  <div className="inputBox">
                    <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                  </div>

                  <div className="inputBox">
                    <input type="submit" value="Login" onClick={login} />
                  </div>

                  <p className="forget">
                    Forget Password ? <a href="#">Click Here</a>
                  </p>
                  <p className="forget">Don't have an account ?  <Link id="signup-toggle" to={{ pathname: "/signup" }}>Sign Up</Link></p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default LoginPage;
