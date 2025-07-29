// src/pages/RepairPool.jsx

import CSVUploader from '../components/CSVUploader';

export default function RepairPool() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-rhPurple mb-4">Repair Pool</h2>
      <CSVUploader />
    </div>
  );
}
