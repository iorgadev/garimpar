import React, { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";

import Router from "next/router";
import Icon from "../components/Icons/Icon";
import Link from "next/link";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginFailed, setLoginFailed] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
      Router.push("/search");
    }
  }, [loggedIn]);

  const handleLogin = async () => {
    setLoginFailed("");
    const result = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const loginData = await result.json();

    if (result.status === 200) {
      const { token, loginSuccess, error } = loginData;
      if (loginSuccess) {
        localStorage.setItem("token", token);
        Router.push("/search");
      } else {
        setLoginFailed(error);
      }
    }
  };

  return (
    <div className="page">
      <Head>
        <title>Garimpar - Primeira Chance</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="splash">
        <div className="splash__content">
          <span className="splash__content__logo">
            <Image
              src="/images/diamond.png"
              alt="logo"
              layout="intrinsic"
              width={36}
              height={36}
            />
            Garimpar
          </span>
          <h1>Encontre agora os jovens brilhantes do Brasil</h1>

          <p>
            Quem sao, onde estudam, onde vivem, e suas premiacoes em olimpiadas,
            ano a ano.
          </p>

          <p>
            Platforma exclusiva desenvolvida pela{" "}
            <Link href="http://primeirachance.org">
              <a>Primeira Chance</a>
            </Link>
          </p>

          <p>
            Tem interesse?{" "}
            <Link href="http://primeirachance.org">
              <a>Entre em contato.</a>
            </Link>
          </p>
        </div>
        <form className="splash__form">
          <span className="splash__form__title">
            <span>Sign In</span>
            <Icon title="Right" />
          </span>
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
          <span className="splash__form__error">{loginFailed}</span>
        </form>
      </div>
    </div>
  );
}

export default Login;
