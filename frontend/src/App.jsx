import { useState } from "react";

import "./App.css";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ResearchQuery from "./components/ResearchQuery";
import MetricCard from "./components/MetricCard";
import ResearchActivity from "./components/ResearchActivity";
import KnowledgeGraph from "./components/KnowledgeGraph";
import RecentResearch from "./components/RecentResearch";
import ResearchSignals from "./components/ResearchSignals";

const viewNames = {
  overview: "Research Intelligence",
  explore: "Explore Research",
  papers: "Research Papers",
  citations: "Citation Network",
  knowledge: "Knowledge Graph",
  trends: "Research Trends",
  settings: "Settings",
};

function App() {
  const [activeView, setActiveView] = useState("overview");

  const handleNavigate = (view) => {
    setActiveView(view);
  };

  return (
    <div className="app">
      <Sidebar
        activeView={activeView}
        onNavigate={handleNavigate}
      />

      <main className="main">
        <Header title={viewNames[activeView]} />

        {activeView === "overview" ? (
          <>
            <ResearchQuery />

            <section className="metrics">
              <MetricCard
                label="PAPERS INDEXED"
                value="12,481"
                change="+8.4%"
              />

              <MetricCard
                label="CITATIONS MAPPED"
                value="84,291"
                change="+12.7%"
              />

              <MetricCard
                label="KNOWLEDGE NODES"
                value="3,842"
                change="+5.2%"
              />

              <MetricCard
                label="RESEARCH SOURCES"
                value="27"
                change="+3"
              />
            </section>

            <section className="workspace-grid">
              <ResearchActivity />
              <KnowledgeGraph />
            </section>

            <section className="bottom-grid">
              <RecentResearch />
              <ResearchSignals />
            </section>
          </>
        ) : (
          <WorkspacePlaceholder
            title={viewNames[activeView]}
            view={activeView}
          />
        )}
      </main>
    </div>
  );
}

function WorkspacePlaceholder({ title, view }) {
  return (
    <section className="workspace-placeholder">
      <div className="placeholder-icon">N</div>

      <div className="section-kicker">
        NEXUS WORKSPACE
      </div>

      <h2>{title}</h2>

      <p>
        The {view} workspace is part of the NEXUS research
        intelligence system and will be connected to the backend
        research pipeline as development progresses.
      </p>

      <span className="placeholder-status">
        MODULE IN DEVELOPMENT
      </span>
    </section>
  );
}

export default App;