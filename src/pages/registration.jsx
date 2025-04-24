import { useState } from 'react';
import { register } from '../api/auth';

export default function Register() {
  const [form, setForm] = useState({ email: '', password: '', name: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await register(form);
      const token = res.data.access_token;
      localStorage.setItem('token', token);
      alert('Utilisateur enregistré et connecté!');
    } catch (err) {
      alert('Erreur lors de l’enregistrement');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Nom" onChange={handleChange} />
      <input name="email" placeholder="Email" type="email" onChange={handleChange} />
      <input name="password" placeholder="Mot de passe" type="password" onChange={handleChange} />
      <button type="submit">S'inscrire</button>
    </form>
  );
}
