import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import "./Landing.scss";
import welcome from "../../assets/images/pablo-sign-in.png";
import { LogoIcon } from "../icons";
import Btn from "../Button";

function LandingPage() {
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [isShow, setIsShow] = useState(false);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/users");
  };

  return (
    <div className="landing">
      <header>
        <div className="logo">
          <LogoIcon />
        </div>
      </header>
      <div className="box1">
        <div>
          <div className="img_wrapper">
            <img src={welcome} alt="sign in " />
          </div>
        </div>
      </div>
      <div className="box2">
        <form onSubmit={handleLogin}>
          <div>
            <div className="welcome">
              <h1>Welcome!</h1>
              <p>Enter details to login.</p>
            </div>
            <div className="inputGroup">
              <input placeholder="Email" type="email" required ref={emailRef} />
            </div>
            <div className="inputGroup">
              <input
                placeholder="Password"
                type={isShow ? "text" : "password"}
                required
                ref={passwordRef}
              />
              <button onClick={() => setIsShow(!isShow)} type="button">
                SHOW
              </button>
            </div>
            <span className="forgotPassword">FORGOT PASSWORD?</span>
            <Btn title="LOG IN" primary />
          </div>
        </form>
      </div>
    </div>
  );
}

export default LandingPage;
