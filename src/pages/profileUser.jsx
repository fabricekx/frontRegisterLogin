import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios
      .get('http://localhost:3000/user/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setUser(res.data))
      .catch((err) => {
        console.error(err);
        alert('Non autorisé ou erreur lors de la récupération du profil');
      });
  }, []);

  if (!user) return <div>Chargement du profil...</div>;

  return (
    <div>
      <h2>Bienvenue !</h2>
      <p><strong>ID :</strong> {user.userId}</p>
    </div>
  );
}
