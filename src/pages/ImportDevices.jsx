import CSVUploader from '../components/CSVUploader';

export default function ImportDevices() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-rhPurple mb-4">Import Devices</h2>
      <CSVUploader />
    </div>
  );
}
