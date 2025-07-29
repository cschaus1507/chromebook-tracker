export default function Upload() {
  return (
    <div>
      <h2 className="text-xl font-bold text-rhPurple mb-4">CSV Upload</h2>
      <input type="file" className="mb-4" />
      <button className="bg-rhPurple text-white px-4 py-2 rounded">Upload</button>
    </div>
  );
}
