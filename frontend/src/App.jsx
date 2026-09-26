import "./App.css";

function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">N</div>
          <div>
            <h1>NEXUS</h1>
            <span>Research Intelligence</span>
          </div>
        </div>

        <nav className="navigation">
          <a className="nav-item active" href="#">
            <span>⌂</span>
            Dashboard
          </a>

          <a className="nav-item" href="#">
            <span>⌕</span>
            Research
          </a>

          <a className="nav-item" href="#">
            <span>◈</span>
            Knowledge Graph
          </a>

          <a className="nav-item" href="#">
            <span>↗</span>
            Trends
          </a>

          <a className="nav-item" href="#">
            <span>◎</span>
            Evidence
          </a>
        </nav>

        <div className="sidebar-footer">
          <div className="system-status">
            <span className="status-dot"></span>
            System Online
          </div>
          <span className="version">NEXUS v0.1.0</span>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div>
            <p className="eyebrow">RESEARCH INTELLIGENCE ENGINE</p>
            <h2>Research Dashboard</h2>
          </div>

          <div className="topbar-actions">
            <button className="icon-button">?</button>
            <div className="avatar">RS</div>
          </div>
        </header>

        <section className="hero">
          <div>
            <p className="hero-label">AI-POWERED LITERATURE INTELLIGENCE</p>
            <h3>
              Explore the world's
              <br />
              <span>research knowledge.</span>
            </h3>
            <p className="hero-description">
              Connect scientific literature, discover relationships,
              analyze research trends, and trace every insight back to
              its evidence.
            </p>
          </div>
        </section>

        <section className="search-section">
          <div className="search-box">
            <span className="search-icon">⌕</span>
            <input
              type="text"
              placeholder="Ask NEXUS about a research topic..."
            />
            <button className="search-button">Search</button>
          </div>
        </section>

        <section className="stats-grid">
          <div className="stat-card">
            <span className="stat-label">PAPERS INDEXED</span>
            <strong>0</strong>
            <span className="stat-description">Research corpus</span>
          </div>

          <div className="stat-card">
            <span className="stat-label">CITATIONS MAPPED</span>
            <strong>0</strong>
            <span className="stat-description">Citation relationships</span>
          </div>

          <div className="stat-card">
            <span className="stat-label">KNOWLEDGE NODES</span>
            <strong>0</strong>
            <span className="stat-description">Research concepts</span>
          </div>

          <div className="stat-card">
            <span className="stat-label">ACTIVE SOURCES</span>
            <strong>0</strong>
            <span className="stat-description">Connected sources</span>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;