import { NavLink } from 'react-router-dom';

export default function NavBar() {
  const base = "px-4 py-2 rounded font-semibold";
  return (
    <nav className="bg-rhPurple text-white p-4 mb-6 flex flex-wrap gap-4">
      <NavLink to="/" className={({ isActive }) => isActive ? base + ' bg-white text-rhPurple' : base + ' text-white'}>Dashboard</NavLink>
      <NavLink to="/assigned" className={({ isActive }) => isActive ? base + ' bg-white text-rhPurple' : base + ' text-white'}>Assigned</NavLink>
      <NavLink to="/repair" className={({ isActive }) => isActive ? base + ' bg-white text-rhPurple' : base + ' text-white'}>Repair</NavLink>
      <NavLink to="/available" className={({ isActive }) => isActive ? base + ' bg-white text-rhPurple' : base + ' text-white'}>Available</NavLink>
      <NavLink to="/upload" className={({ isActive }) => isActive ? base + ' bg-white text-rhPurple' : base + ' text-white'}>CSV Upload</NavLink>
    </nav>
  );
}
