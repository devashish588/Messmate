import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';
import { saveAccessToken } from '../utils/auth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', { email, password });
      saveAccessToken(res.data.data.accessToken);
      navigate('/');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <input className="input mb-2" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <input className="input mb-4" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <button className="btn w-full bg-blue-600 text-white py-2 rounded">Login</button>
      </form>
    </div>
  );
}

export default Login;
