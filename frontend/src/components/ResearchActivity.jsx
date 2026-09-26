function ResearchActivity() {
  return (
    <div className="panel activity-panel">
      <div className="panel-header">
        <div>
          <div className="panel-kicker">RESEARCH ACTIVITY</div>
          <h3>Research landscape</h3>
        </div>

        <span className="panel-meta">2026</span>
      </div>

      <div className="activity-chart">
        <div className="chart-grid"></div>

        <svg viewBox="0 0 700 220" preserveAspectRatio="none">
          <polyline
            points="0,180 70,165 120,172 180,125 240,145 300,95 355,112 420,65 470,82 530,48 590,60 650,25 700,35"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />

          <polyline
            points="0,195 80,188 145,190 210,160 280,172 350,145 420,152 490,125 560,130 630,105 700,110"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.25"
          />
        </svg>

        <div className="chart-labels">
          <span>JAN</span>
          <span>MAR</span>
          <span>MAY</span>
          <span>JUL</span>
          <span>SEP</span>
          <span>NOV</span>
        </div>
      </div>
    </div>
  );
}

export default ResearchActivity;