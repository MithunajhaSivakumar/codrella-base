import React from "react";
import NavBar from "../../components/Navbar/Navbar";
import "./Contact.css"; 
function Contact() {
  return (
    <div> 
      <main>
        <section id="contact-section">
          <div className="color"></div>
          <div className="color"></div>
          <div className="color"></div>

          <div className="box">
          <div className="square" style={{"--i":0}}></div>
          <div className="square" style={{"--i":1}}></div>
          <div className="square" style={{"--i":2}}></div>
          <div className="square" style={{"--i":3}}></div>
          <div className="square" style={{"--i":4}}></div>
 
            <div className="container" id="login-form">
              <div className="form">
                <h2>Contact Us</h2>
                <form action="">
                  <div className="inputBox">
                    <input type="text" placeholder="Username" />
                  </div>

                  <div className="inputBox">
                    <input type="text" placeholder="Message" />
                  </div>

                  <div className="inputBox">
                    <input type="submit" value="Submit" />
                  </div>

                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Contact;
