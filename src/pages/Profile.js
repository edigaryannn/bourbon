import React, { useState } from "react";

export default function Profile() {
  const [activeForm, setActiveForm] = useState('signIn');

  const handleClick = (formType) => {
    setActiveForm(formType);
  };

  return (
    <>
      <div className="profile-cont">
        <div className="profile-div">
          <div className="profile-main">
            <div className="profile-heading"><h1>Sign in to account</h1></div>
            <div className="profile-text">
              <span onClick={() => handleClick('signIn')} className={activeForm === 'signIn' ? 'active' : ' '}>Sign in</span>
              <span onClick={() => handleClick('createAccount')} className={activeForm === 'createAccount' ? 'active' : ' '}>Create account</span>
            </div>
            <div className="profile-form">
              {activeForm === 'signIn' && (
                <form className="form signIn">
                  <input type="text" placeholder="Username" required />
                  <input type="password" placeholder="Password" required />

                  <button className="form-btn">
                    Sign In
                  </button>
                </form>
              )}
              {activeForm === 'createAccount' && (
                <form className="form createAccount">
                  <input className="form-input" type="text" placeholder="First-name" required />
                  <input type="text" placeholder="Surname" required />
                  <input type="mail" placeholder="Email" required />
                  <input type="text" placeholder="Username" required />
                  <input type="password" placeholder="Password" required />
                  <input type="password" placeholder="Confirm password" required />
                  <textarea placeholder="Enter the message:" required></textarea>
                  <button className="form-btn">
                    Create Account
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
