import { useParams } from 'react-router-dom';


export default function DeviceOverview() {
  const { tag } = useParams();

  return (
    <div className="p-6">
      
      <h2 className="text-xl font-bold text-rhPurple mt-4">Device Overview: {tag}</h2>
      <p className="text-rhGray">[Device details and transfer options will appear here]</p>
    </div>
  );
}
