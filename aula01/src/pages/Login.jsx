import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const alerta = () => {
  alert(`Você logou com o email: ${email}`);
};

return (
  <div>
    <h2>Login</h2>
    <div>
      <label>Email:</label>
      <input
      placeholder="Digite seu Email"
      id="email"
      type="email"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />
    </div>

    <div>
      <label>Senha:</label>
      <input
      placeholder="Digite sua senha"
      id="password"
      type="password"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />
    </div>
    <div>
      <button onClick={alerta}>Login</button>
    </div>
  </div>
)
}
export default Login;