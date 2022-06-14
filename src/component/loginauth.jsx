import { useRef, useState } from "react";
import { signup, useAuth, logout,login } from "../firebase-config";
import React from "react";

export default function Loginauth() {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  async function handleSignup() {
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch
    {
      alert("Error!");
    }
  }

  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error");
    }
    setLoading(false);
  }

  return (
    <div id="main">
      <div>Current logged in as:{currentUser?.email}</div>
      <div id="fields">
        <input ref={emailRef} placeholder="Email" />
        <input ref={passwordRef} placeholder="password" />
      </div>
      <button disabled={loading || currentUser} onClick={handleSignup}>
        Sign up
      </button>
      <button disabled={loading || currentUser} onClick={handleLogin}>
        Log In
      </button>
      <button onClick={handleLogout} disabled={loading || !currentUser}>
        Log Out
      </button>
    </div>
  );
}
