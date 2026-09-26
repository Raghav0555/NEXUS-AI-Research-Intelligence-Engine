function ResearchQuery() {
  return (
    <section className="query-section">
      <div className="query-heading">
        <div>
          <div className="section-kicker">RESEARCH QUERY</div>
          <h2>What do you want to investigate?</h2>
        </div>
      </div>

      <div className="query-box">
        <span className="query-icon">⌕</span>

        <input
          type="text"
          placeholder="Ask about a research topic, paper, author, or scientific trend..."
        />

        <div className="query-shortcut">⌘ K</div>

        <button>Investigate →</button>
      </div>

      <div className="suggestions">
        <span>Try:</span>
        <button>AI safety research</button>
        <button>Transformer architectures</button>
        <button>Quantum computing</button>
      </div>
    </section>
  );
}

export default ResearchQuery;