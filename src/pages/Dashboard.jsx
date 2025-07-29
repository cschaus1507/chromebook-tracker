import NavBar from '../components/NavBar';

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-rhPurple mb-2">Royalton-Hartland Chromebook Tracker</h1>
      <p className="text-sm text-rhGray italic mb-4">Developed by Chris Schaus with the assistance of ChatGPT 4o.</p>
      <NavBar />
      <p className="text-rhGray mt-6">Welcome to the dashboard. Use the tabs above to manage devices.</p>
    </div>
  );
}
