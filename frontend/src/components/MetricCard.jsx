function MetricCard({ label, value, change }) {
  return (
    <div className="metric">
      <div className="metric-label">{label}</div>

      <div className="metric-row">
        <strong>{value}</strong>
        <span>{change}</span>
      </div>

      <div className="metric-line"></div>
    </div>
  );
}

export default MetricCard;