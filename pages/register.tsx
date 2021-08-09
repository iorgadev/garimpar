import Link from "next/link";
import Router from "next/router";
import React, { useState } from "react";
import Icon from "../components/Icons/Icon";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegisterSubmit = async () => {
    const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
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
        Router.push("/");
      }
    } else {
      const { error } = registerData;
      setErrorMessage(error);
    }
  };

  return (
    <div className="page">
      <div className="splash register">
        <form autoComplete="new-password" className="splash__form">
          <span className="splash__form__title">
            <span>Cadastre-se</span>
            <Icon title="Right" />
          </span>
          <input
            defaultValue=""
            autoComplete="new-password"
            type="text"
            name="email"
            id="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            autoComplete="new-password"
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            name="password2"
            id="password2"
            placeholder="Confirme Senha"
            onChange={(e) => setPassword2(e.target.value)}
          />
          <input
            type="button"
            value="Cadastrar"
            onClick={handleRegisterSubmit}
          />
          <span className="splash__form__error">{errorMessage}</span>
        </form>
        <div>
          <span>
            Já tem uma conta?{" "}
            <Link href="/">
              <a>Entre aqui!</a>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Register;
