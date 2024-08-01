import React, { useState } from "react";
import { useAuthStore } from "../store/authUser.js";
import { useNavigate } from "react-router";

export default function Profile() {
  const [activeForm, setActiveForm] = useState('signIn');
  const navigate = useNavigate();
  const { isLoggedIn } = useAuthStore();

  const handleClick = (formType) => {
    setActiveForm(formType);
  };

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { signup, isSigningUp } = useAuthStore();

  const handleSignUp = (e) => {
    e.preventDefault();
    signup({ email, username, password });
  };

  const { login, isLoggingIn } = useAuthStore();

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password });
    
  };
  
  if(isLoggedIn){navigate('/')};

  return (
    <main>
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
                <form className="form signIn" onSubmit={handleLogin}>
                  <input
                    type="text"
                    placeholder='you@example.com'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <input
                    type="password"
                    placeholder='••••••••'
                    id='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <button className="form-btn">
                  {isLoggingIn ? "Loading..." : "Login"}
                  </button>
                </form>
              )}
              {activeForm === 'createAccount' && (
                <form className="form createAccount" onSubmit={handleSignUp}>
                  <input
                    type="mail"
                    placeholder='you@example.com'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Username"
                    id='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    id='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button className="form-btn">
                  {isSigningUp ? "Loading..." : "Sign Up"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
