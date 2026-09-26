import "./App.css";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ResearchQuery from "./components/ResearchQuery";
import MetricCard from "./components/MetricCard";
import ResearchActivity from "./components/ResearchActivity";
import KnowledgeGraph from "./components/KnowledgeGraph";
import RecentResearch from "./components/RecentResearch";
import ResearchSignals from "./components/ResearchSignals";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <main className="main">
        <Header />

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
      </main>
    </div>
  );
}

export default App;