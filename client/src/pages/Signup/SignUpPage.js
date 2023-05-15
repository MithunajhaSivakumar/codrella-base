import React from "react";
import NavBar from "../../components/Navbar/Navbar";
import "../Login/LoginPage.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import { signUp } from "../../action/auth"

function SignUpPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    cPassword: "",
  });
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function formSubmit2(data) {
    console.log(data);
    dispatch(signUp(data, navigate))
  }

  function formValidate(value, field) {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    setFormData({ ...formData, username: value });
    switch (field) {
      case "email":
        if (value.match(mailFormat))
          break;

      default:
        break;
    }
  }
  return (
    <div>
       <main>
        <section>
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
                <h2>Signup Here</h2>
                <form action="">
                  <div className="inputBox">
                    <input
                      type="text"
                      placeholder="Name"
                      value={formData.username}
                      onChange={(e) =>
                        formValidate(e.target.value, "username")
                      }
                    />
                  </div>
                  <div className="inputBox">
                    <input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="inputBox">
                    <input
                      type="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                    />
                  </div>
                  <div className="inputBox">
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      value={formData.cPassword}
                      onChange={(e) =>
                        setFormData({ ...formData, cPassword: e.target.value })
                      }
                    />
                  </div>
                  <div className="inputBox">
                    <button type="button" onClick={() => formSubmit2(formData)}>
                      Signup
                    </button>
                  </div>

                  <p className="forget">
                    Forget Password ? <a href="#">Click Here</a>
                  </p>
                  <p className="forget">
                    Already have an account ?{" "}
                    <Link id="signup-toggle" to={{ pathname: "/login" }}>
                      Login
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SignUpPage;
