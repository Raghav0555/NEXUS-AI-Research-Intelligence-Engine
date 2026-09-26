function RecentResearch() {
  return (
    <div className="panel">
      <div className="panel-header">
        <div>
          <div className="panel-kicker">RECENT RESEARCH</div>
          <h3>Latest papers</h3>
        </div>

        <button className="panel-action">View all →</button>
      </div>

      <div className="paper">
        <div className="paper-number">01</div>

        <div>
          <h4>Scaling Laws for Neural Language Models</h4>
          <p>Language Models · 2026 · 428 citations</p>
        </div>

        <span className="paper-arrow">→</span>
      </div>

      <div className="paper">
        <div className="paper-number">02</div>

        <div>
          <h4>Emergent Capabilities in Large Models</h4>
          <p>Artificial Intelligence · 2026 · 312 citations</p>
        </div>

        <span className="paper-arrow">→</span>
      </div>

      <div className="paper">
        <div className="paper-number">03</div>

        <div>
          <h4>Retrieval-Augmented Generation Systems</h4>
          <p>NLP · 2026 · 287 citations</p>
        </div>

        <span className="paper-arrow">→</span>
      </div>
    </div>
  );
}

export default RecentResearch;