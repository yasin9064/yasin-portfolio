import Link from 'next/link';
import ElectricBorder from '../components/ElectricBorder';

interface StatCardProps {
  label: string;
  value: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value }) => {
  return (
    <ElectricBorder>
      <div className="stat">
        <h4>{label}</h4>
        <p>{value}</p>
      </div>
    </ElectricBorder>
  );
};

export default StatCard;
