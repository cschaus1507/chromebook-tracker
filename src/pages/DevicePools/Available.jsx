export default function Available() {
  return (
    <div>
      <input type="text" placeholder="Search devices..." className="p-3 border border-gray-300 rounded w-full mb-4" />
      <div className="p-4 border border-gray-300 rounded bg-white shadow">
        <h2 className="font-semibold text-rhPurple mb-2">Available Devices</h2>
        <p className="text-sm text-rhGray">[Available device data and actions will go here]</p>
      </div>
    </div>
  );
}
