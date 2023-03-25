import React from "react";
import "./Landing.scss";
import welcome from "../../assets/images/pablo-sign-in.png";
import { LogoIcon } from "../icons";
import Btn from "../Button";

function LandingPage() {
  const handleLogin = () => {};
  return (
    <div className="landing">
      <header>
        <div className="logo">
          <LogoIcon />
        </div>
      </header>
      <div className="box1">
        <div>
          {/* <div>
            <LogoIcon />
          </div> */}
          <div className="img_wrapper">
            <img src={welcome} alt="sign in " />
          </div>
        </div>
      </div>
      <div className="box2">
        <form>
          <div>
            <div className="welcome">
              <h1>Welcome!</h1>
              <p>Enter details to login.</p>
            </div>
            <div className="inputGroup">
              <input placeholder="Email" type="text" />
            </div>
            <div className="inputGroup">
              <input placeholder="Password" type="text" />
              <span>SHOW</span>
            </div>
            <span className="forgotPassword">FORGOT PASSWORD?</span>
            <Btn title="LOG IN" action={handleLogin} primary />
          </div>
        </form>
      </div>
    </div>
  );
}

export default LandingPage;
