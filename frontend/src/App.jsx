import "./App.css";

function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">N</div>
          <div>
            <div className="brand-name">NEXUS</div>
            <div className="brand-subtitle">Research Intelligence</div>
          </div>
        </div>

        <div className="nav-section">
          <div className="nav-label">WORKSPACE</div>

          <a className="nav-item active" href="#">
            <span>⌂</span>
            Overview
          </a>

          <a className="nav-item" href="#">
            <span>⌕</span>
            Explore
          </a>

          <a className="nav-item" href="#">
            <span>□</span>
            Papers
          </a>

          <a className="nav-item" href="#">
            <span>↗</span>
            Citations
          </a>

          <a className="nav-item" href="#">
            <span>◇</span>
            Knowledge
          </a>

          <a className="nav-item" href="#">
            <span>⌁</span>
            Trends
          </a>
        </div>

        <div className="nav-section secondary">
          <div className="nav-label">SYSTEM</div>

          <a className="nav-item" href="#">
            <span>⚙</span>
            Settings
          </a>
        </div>

        <div className="sidebar-bottom">
          <div className="status">
            <span className="status-indicator"></span>
            NEXUS Engine Online
          </div>

          <div className="version">v0.1.0 · Development</div>
        </div>
      </aside>

      <main className="main">
        <header className="header">
          <div>
            <div className="breadcrumb">NEXUS / OVERVIEW</div>
            <h1>Research Intelligence</h1>
          </div>

          <div className="header-right">
            <div className="engine-status">
              <span></span>
              Engine Online
            </div>

            <div className="avatar">RS</div>
          </div>
        </header>

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

        <section className="metrics">
          <Metric
            label="PAPERS INDEXED"
            value="12,481"
            change="+8.4%"
          />

          <Metric
            label="CITATIONS MAPPED"
            value="84,291"
            change="+12.7%"
          />

          <Metric
            label="KNOWLEDGE NODES"
            value="3,842"
            change="+5.2%"
          />

          <Metric
            label="RESEARCH SOURCES"
            value="27"
            change="+3"
          />
        </section>

        <section className="workspace-grid">
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

          <div className="panel graph-panel">
            <div className="panel-header">
              <div>
                <div className="panel-kicker">KNOWLEDGE GRAPH</div>
                <h3>Research connections</h3>
              </div>

              <button className="panel-action">Explore →</button>
            </div>

            <div className="graph">
              <div className="graph-line line-one"></div>
              <div className="graph-line line-two"></div>
              <div className="graph-line line-three"></div>

              <div className="node node-center">AI</div>
              <div className="node node-one">ML</div>
              <div className="node node-two">NLP</div>
              <div className="node node-three">CV</div>
              <div className="node node-four">RL</div>
              <div className="node node-five">LLM</div>
            </div>
          </div>
        </section>

        <section className="bottom-grid">
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

          <div className="panel">
            <div className="panel-header">
              <div>
                <div className="panel-kicker">RESEARCH SIGNALS</div>
                <h3>Emerging topics</h3>
              </div>
            </div>

            <div className="signal">
              <span>01</span>
              <div>
                <strong>Agentic AI</strong>
                <small>+42% research activity</small>
              </div>
            </div>

            <div className="signal">
              <span>02</span>
              <div>
                <strong>Multimodal Models</strong>
                <small>+31% research activity</small>
              </div>
            </div>

            <div className="signal">
              <span>03</span>
              <div>
                <strong>AI Reasoning</strong>
                <small>+26% research activity</small>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function Metric({ label, value, change }) {
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

export default App;