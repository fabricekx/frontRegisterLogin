import { useState } from 'react';
import { login } from '../api/auth';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(form);
      const token = res.data.access_token;
      localStorage.setItem('token', token);
      alert('Connecté !');
    } catch (err) {
      alert('Erreur lors de la connexion');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" placeholder="Email" type="email" onChange={handleChange} />
      <input name="password" placeholder="Mot de passe" type="password" onChange={handleChange} />
      <button type="submit">Se connecter</button>
    </form>
  );
}
