import React, { useState } from 'react';
import Papa from 'papaparse';

export default function CSVUploader() {
  const [csvData, setCsvData] = useState([]);
  const [filename, setFilename] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFilename(file.name);

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: function(results) {
        console.log('Parsed CSV:', results.data);
        setCsvData(results.data);
      }
    });
  };

  const handleUpload = async () => {
    try {
      const res = await fetch('https://chromebook-api.onrender.com/api/import', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ records: csvData }),
      });
      const result = await res.json();
      alert(`Import completed: ${result.successCount} succeeded, ${result.failCount} failed`);
    } catch (err) {
      console.error('Upload error:', err);
      alert('Upload failed.');
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <h2 className="text-xl font-semibold text-rhPurple mb-4">Import Devices via CSV</h2>
      <input type="file" accept=".csv" onChange={handleFileChange} className="mb-4" />
      {csvData.length > 0 && (
        <>
          <p className="text-sm text-rhGray mb-2">{csvData.length} records loaded from {filename}</p>
          <button onClick={handleUpload} className="bg-rhPurple text-white px-4 py-2 rounded">
            Upload to Database
          </button>
        </>
      )}
    </div>
  );
}
