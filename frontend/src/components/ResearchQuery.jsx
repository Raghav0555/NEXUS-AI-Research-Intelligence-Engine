import { useState } from "react";

function ResearchQuery() {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchedQuery, setSearchedQuery] = useState("");

  const investigate = () => {
    const trimmedQuery = query.trim();

    if (!trimmedQuery || isSearching) {
      return;
    }

    setIsSearching(true);

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
            onClick={() =>
              selectSuggestion("Transformer architectures")
            }
          >
            Transformer architectures
          </button>

          <button
            onClick={() => selectSuggestion("Quantum computing")}
          >
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
              3 relevant papers
            </div>
          </div>

          <div className="result-card">
            <div className="result-index">01</div>

            <div className="result-content">
              <h4>
                Research directions related to {searchedQuery}
              </h4>

              <p>
                NEXUS will connect this query to papers, citations,
                concepts, and supporting evidence from the research
                corpus.
              </p>

              <div className="result-meta">
                <span>Research paper</span>
                <span>Evidence available</span>
                <span>2026</span>
              </div>
            </div>

            <span className="result-arrow">→</span>
          </div>

          <div className="result-card">
            <div className="result-index">02</div>

            <div className="result-content">
              <h4>
                Emerging research patterns and related concepts
              </h4>

              <p>
                Future NEXUS agents will identify relationships across
                the literature and surface the most relevant findings.
              </p>

              <div className="result-meta">
                <span>Knowledge graph</span>
                <span>Related concepts</span>
                <span>2026</span>
              </div>
            </div>

            <span className="result-arrow">→</span>
          </div>

          <div className="result-card">
            <div className="result-index">03</div>

            <div className="result-content">
              <h4>
                Citation and evidence landscape
              </h4>

              <p>
                Citation relationships will allow NEXUS to trace
                research claims back to their underlying sources.
              </p>

              <div className="result-meta">
                <span>Citation graph</span>
                <span>Evidence</span>
                <span>Traceable</span>
              </div>
            </div>

            <span className="result-arrow">→</span>
          </div>
        </section>
      )}
    </>
  );
}

export default ResearchQuery;