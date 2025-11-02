interface StatCardProps {
  label: string;
  value: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value }) => {
  return (
    <div className="stat">
      <h4>{label}</h4>
      <p>{value}</p>
    </div>
  );
};

export default StatCard;
