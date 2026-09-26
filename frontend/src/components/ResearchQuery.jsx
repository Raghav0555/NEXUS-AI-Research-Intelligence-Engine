import { useState } from "react";

const researchResults = [
  {
    id: "01",
    title: "Research directions related to the investigated topic",
    type: "Research paper",
    year: "2026",
    citations: "428",
    relevance: "96%",
    evidence: "Strong",
    description:
      "NEXUS identifies relevant research directions by connecting literature, concepts, citations, and supporting evidence across the research corpus.",
    concepts: ["AI Safety", "Alignment", "Evaluation"],
  },
  {
    id: "02",
    title: "Emerging research patterns and related concepts",
    type: "Knowledge graph",
    year: "2026",
    citations: "312",
    relevance: "91%",
    evidence: "Strong",
    description:
      "Related concepts are connected through the NEXUS knowledge graph, allowing researchers to trace relationships between different areas of scientific literature.",
    concepts: ["Reasoning", "Agents", "Evaluation"],
  },
  {
    id: "03",
    title: "Citation and evidence landscape",
    type: "Citation analysis",
    year: "2026",
    citations: "287",
    relevance: "87%",
    evidence: "Verified",
    description:
      "Citation relationships provide a traceable path between research claims and their underlying sources, enabling evidence-backed analysis.",
    concepts: ["Citations", "Evidence", "Research Trends"],
  },
];

function ResearchQuery() {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchedQuery, setSearchedQuery] = useState("");
  const [selectedResult, setSelectedResult] = useState(null);

  const investigate = () => {
    const trimmedQuery = query.trim();

    if (!trimmedQuery || isSearching) {
      return;
    }

    setIsSearching(true);
    setSelectedResult(null);

    setTimeout(() => {
      setSearchedQuery(trimmedQuery);
      setIsSearching(false);
    }, 700);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      investigate();
    }
  };

  const selectSuggestion = (suggestion) => {
    setQuery(suggestion);
  };

  const openResult = (result) => {
    setSelectedResult(result);
  };

  return (
    <>
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
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about a research topic, paper, author, or scientific trend..."
          />

          <div className="query-shortcut">↵ Enter</div>

          <button onClick={investigate} disabled={isSearching}>
            {isSearching ? "Investigating..." : "Investigate →"}
          </button>
        </div>

        <div className="suggestions">
          <span>Try:</span>

          <button onClick={() => selectSuggestion("AI safety research")}>
            AI safety research
          </button>

          <button
            onClick={() => selectSuggestion("Transformer architectures")}
          >
            Transformer architectures
          </button>

          <button onClick={() => selectSuggestion("Quantum computing")}>
            Quantum computing
          </button>
        </div>
      </section>

      {searchedQuery && (
        <section className="results-preview">
          <div className="results-header">
            <div>
              <div className="panel-kicker">RESEARCH RESULTS</div>

              <h3>
                Results for <span>"{searchedQuery}"</span>
              </h3>
            </div>

            <div className="result-count">
              {researchResults.length} relevant sources
            </div>
          </div>

          <div className="results-body">
            <div className="result-list">
              {researchResults.map((result) => (
                <button
                  className={`result-card ${
                    selectedResult?.id === result.id ? "selected" : ""
                  }`}
                  key={result.id}
                  onClick={() => openResult(result)}
                >
                  <div className="result-index">{result.id}</div>

                  <div className="result-content">
                    <div className="result-title-row">
                      <h4>{result.title}</h4>

                      <span className="relevance">
                        {result.relevance}
                      </span>
                    </div>

                    <p>{result.description}</p>

                    <div className="result-meta">
                      <span>{result.type}</span>
                      <span>{result.year}</span>
                      <span>{result.citations} citations</span>
                      <span className="evidence-badge">
                        ● {result.evidence} evidence
                      </span>
                    </div>
                  </div>

                  <span className="result-arrow">→</span>
                </button>
              ))}
            </div>

            <div className="evidence-panel">
              {selectedResult ? (
                <>
                  <div className="evidence-header">
                    <div>
                      <div className="panel-kicker">SOURCE ANALYSIS</div>
                      <h3>Evidence overview</h3>
                    </div>

                    <span className="evidence-status">
                      VERIFIED
                    </span>
                  </div>

                  <div className="evidence-score">
                    <div>
                      <span>RELEVANCE</span>
                      <strong>{selectedResult.relevance}</strong>
                    </div>

                    <div>
                      <span>CITATIONS</span>
                      <strong>{selectedResult.citations}</strong>
                    </div>
                  </div>

                  <div className="evidence-description">
                    <div className="panel-kicker">SOURCE SUMMARY</div>

                    <p>{selectedResult.description}</p>
                  </div>

                  <div className="concept-section">
                    <div className="panel-kicker">
                      CONNECTED CONCEPTS
                    </div>

                    <div className="concept-list">
                      {selectedResult.concepts.map((concept) => (
                        <span key={concept}>{concept}</span>
                      ))}
                    </div>
                  </div>

                  <button className="trace-button">
                    Trace evidence → 
                  </button>
                </>
              ) : (
                <div className="evidence-empty">
                  <div className="empty-node">N</div>

                  <div className="panel-kicker">
                    SOURCE INTELLIGENCE
                  </div>

                  <h3>Select a source</h3>

                  <p>
                    Select a research result to inspect its relevance,
                    citations, connected concepts, and evidence.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default ResearchQuery;