import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Dashboard from './pages/Dashboard';
import Assigned from './pages/DevicePools/Assigned';
import Repair from './pages/DevicePools/Repair';
import Available from './pages/DevicePools/Available';
import Upload from './pages/Upload';

export default function App() {
  return (
    <div className="p-6">
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/assigned" element={<Assigned />} />
        <Route path="/repair" element={<Repair />} />
        <Route path="/available" element={<Available />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </div>
  );
}
