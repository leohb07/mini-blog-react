import { useState } from "react";
import styles from "./Register.module.css";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    const user = {
      displayName,
      email,
      password,
    };

    if (password !== confirmPassword) {
      setError("As senhas devem ser iguais");
      return;
    }

    console.log(user);
  };

  return (
    <div className={styles.register}>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>

          <input
            type="text"
            id="displayName"
            placeholder="Nome do usuário"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required
          />
        </label>

        <label>
          <span>Email:</span>

          <input
            type="email"
            id="email"
            placeholder="Email do usuário"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          <span>Senha:</span>

          <input
            type="password"
            id="password"
            placeholder="Insira uma senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <label>
          <span>Confirmar senha:</span>

          <input
            type="password"
            id="confirmPassword"
            placeholder="Repita sua senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>

        <button className="btn">Cadastrar</button>

        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Register;
