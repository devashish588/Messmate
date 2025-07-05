import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../utils/auth';

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 text-white px-4 py-2 flex justify-between">
      <div className="space-x-4">
        <Link to="/">Dashboard</Link>
        <Link to="/meal-off">Meal Off</Link>
      </div>
      <button onClick={handleLogout} className="hover:underline">Logout</button>
    </nav>
  );
}
