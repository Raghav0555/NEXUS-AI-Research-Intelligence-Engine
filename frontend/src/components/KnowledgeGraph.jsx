function KnowledgeGraph() {
  return (
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
  );
}

export default KnowledgeGraph;