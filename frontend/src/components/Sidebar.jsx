function Sidebar({ activeView, onNavigate }) {
  const navigationItems = [
    { id: "overview", label: "Overview", icon: "⌂" },
    { id: "explore", label: "Explore", icon: "⌕" },
    { id: "papers", label: "Papers", icon: "□" },
    { id: "citations", label: "Citations", icon: "↗" },
    { id: "knowledge", label: "Knowledge", icon: "◇" },
    { id: "trends", label: "Trends", icon: "⌁" },
  ];

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

        {navigationItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${
              activeView === item.id ? "active" : ""
            }`}
            onClick={() => onNavigate(item.id)}
          >
            <span>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </div>

      <div className="nav-section secondary">
        <div className="nav-label">SYSTEM</div>

        <button
          className={`nav-item ${
            activeView === "settings" ? "active" : ""
          }`}
          onClick={() => onNavigate("settings")}
        >
          <span>⚙</span>
          Settings
        </button>
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