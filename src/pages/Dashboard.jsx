export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-rhPurple mb-2">Royalton-Hartland Chromebook Tracker</h1>
      <p className="text-sm text-rhGray italic mb-4">Developed by Chris Schaus with the assistance of ChatGPT 4o.</p>
      <p className="text-rhGray mb-6">Welcome to the dashboard. Use the tabs above to manage devices.</p>
      <input type="text" placeholder="Search by student or device tag..." className="p-3 border border-gray-300 rounded w-full mb-4" />
      <div className="p-4 border border-gray-300 rounded bg-white shadow">
        <h2 className="font-semibold text-rhPurple mb-2">Search Results</h2>
        <p className="text-sm text-rhGray">[Device assignment history, status switches, return box, and notes field will appear here]</p>
      </div>
    </div>
  );
}
