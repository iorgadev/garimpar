import Router from "next/router";
import React, { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleRegisterSubmit = async () => {
    const result = await fetch("http://localhost:8080/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, password2 }),
    });
    const registerData = await result.json();

    if (result.status === 200) {
      const { registerSuccess } = registerData;
      if (registerSuccess) {
        // localStorage.setItem("token", token);
        Router.push("/");
      } else {
        // registration failed
      }
    }
    console.log("reg data: ", registerData);
  };

  return (
    <div>
      <form autoComplete="new-password">
        <input
          defaultValue=""
          autoComplete="new-password"
          type="text"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          autoComplete="new-password"
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          name="password2"
          id="password2"
          onChange={(e) => setPassword2(e.target.value)}
        />
        <input type="button" value="Register" onClick={handleRegisterSubmit} />
      </form>
    </div>
  );
}

export default Register;
