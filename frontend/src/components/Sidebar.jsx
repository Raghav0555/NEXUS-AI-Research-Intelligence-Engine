function Sidebar() {
  return (
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
  );
}

export default Sidebar;