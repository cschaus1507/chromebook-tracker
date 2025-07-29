import React, { useEffect, useState } from 'react';

export default function DeviceList() {
  const [devices, setDevices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://chromebook-api.onrender.com/api/devices')
      .then(res => res.json())
      .then(data => setDevices(data))
      .catch(err => console.error('Failed to fetch devices:', err));
  }, []);

  const filtered = devices.filter(d =>
    d.asset_tag?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.service_tag?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <h2 className="text-xl font-semibold text-rhPurple mb-4">Imported Devices</h2>
      <input
        type="text"
        placeholder="Search by asset or service tag..."
        className="w-full p-2 mb-4 border border-gray-300 rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table className="w-full text-sm border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Asset Tag</th>
            <th className="p-2 border">Service Tag</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Notes</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((device, idx) => (
            <tr key={idx} className="text-center">
              <td className="p-2 border">{device.asset_tag}</td>
              <td className="p-2 border">{device.service_tag}</td>
              <td className="p-2 border">{device.status}</td>
              <td className="p-2 border">{device.notes}</td>
            </tr>
          ))}
          {filtered.length === 0 && (
            <tr><td colSpan={4} className="text-gray-400 p-4">No matching devices found</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
