import React, { useEffect, useState } from "react";
import Image from "next/image";

import Router from "next/router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
      Router.push("/search");
    }
  }, [loggedIn]);

  const handleLogin = async () => {
    const result = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const loginData = await result.json();

    if (result.status === 200) {
      const { token, loginSuccess } = loginData;
      if (loginSuccess) {
        localStorage.setItem("token", token);
        Router.push("/search");
      } else {
        console.log("invalid login");
      }
    }
  };

  return (
    <div className="page">
      <div className="splash">
        <div className="splash__content">
          <span className="splash__content__logo">
            <Image
              src="/images/diamond.png"
              alt="logo"
              layout="intrinsic"
              width={24}
              height={24}
            />
            Garimpar
          </span>
          <h1>Encontre agora os jovens brilhantes do Brasil</h1>

          <p>
            Quem sao, onde estudam, onde vivem, e suas premiacoes em olimpiadas,
            ano a ano.
          </p>

          <p>Platforma exclusiva desenvolvida pela Primeira Chance</p>

          <p>Tem interesse? Entre em contato.</p>
        </div>
        <form className="splash__form">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <input type="button" value="login" onClick={handleLogin} />
        </form>
      </div>
    </div>
  );
}

export default Login;
