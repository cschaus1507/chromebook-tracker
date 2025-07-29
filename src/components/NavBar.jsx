import { NavLink } from 'react-router-dom';

export default function NavBar() {
  const base = "px-4 py-2 rounded font-semibold";
  return (
    <nav className="flex gap-4 mb-6">
      <NavLink to="/" className={({ isActive }) => isActive ? base + ' bg-rhPurple text-white shadow' : base + ' bg-gray-200 text-rhPurple'}>Dashboard</NavLink>
      <NavLink to="/assigned" className={({ isActive }) => isActive ? base + ' bg-rhPurple text-white shadow' : base + ' bg-gray-200 text-rhPurple'}>Assigned</NavLink>
      <NavLink to="/repair" className={({ isActive }) => isActive ? base + ' bg-rhPurple text-white shadow' : base + ' bg-gray-200 text-rhPurple'}>Repair Pool</NavLink>
      <NavLink to="/available" className={({ isActive }) => isActive ? base + ' bg-rhPurple text-white shadow' : base + ' bg-gray-200 text-rhPurple'}>Available</NavLink>
      <NavLink to="/add-student" className={({ isActive }) => isActive ? base + ' bg-rhPurple text-white shadow' : base + ' bg-gray-200 text-rhPurple'}>Add Student</NavLink>
    </nav>
  );
}
