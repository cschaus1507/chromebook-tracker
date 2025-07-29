import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Dashboard from './pages/Dashboard';
import AssignedDevices from './pages/AssignedDevices';
import AvailableDevices from './pages/AvailableDevices';
import AddStudent from './pages/AddStudent';
import RepairPool from './pages/RepairPool';
import DeviceOverview from './pages/DeviceOverview';

export default function App() {
  return (
    <div className="p-6">
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/assigned" element={<AssignedDevices />} />
        <Route path="/available" element={<AvailableDevices />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/repair" element={<RepairPool />} />
        <Route path="/device/:tag" element={<DeviceOverview />} />
      </Routes>
    </div>
  );
}
