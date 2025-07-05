import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/auth/signup', { email, password, name });
      navigate('/login');
    } catch (err) {
      alert('Signup failed');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input className="input mb-2" type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} required />
        <input className="input mb-2" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <input className="input mb-4" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <button className="btn w-full bg-green-600 text-white py-2 rounded">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
