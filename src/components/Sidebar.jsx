export default function Sidebar() {
  return (
    <div className="sidebar-content">
      <div className="brief-card">
        <div className="brief-card__header">
          <span className="handwrite">Before you interview Joshua...</span>
        </div>
        <p>Use NotebookLM to build your background intelligence on the Miami Mall incident.
        Explore the pre-loaded notebook, you could try our prompts.</p>

        <div className="brief-steps">
          <div className="brief-step">
            <span className="step-num handwrite">01.</span>
            <div>
              <strong>NotebookLM Prompt Guide</strong>
              <p>Structured prompts to interrogate the source material.</p>
              <a href="https://wmgmm.github.io/thematts/notebooklm.html" target="_blank" rel="noreferrer">
                <button className="btn-outline">Open Prompt Guide ↗</button>
              </a>
            </div>
          </div>
          <div className="brief-step">
            <span className="step-num handwrite">02.</span>
            <div>
              <strong>Investigation Notebook</strong>
              <p>NotebookLM loaded with Miami Mall source material.</p>
              <a href="https://notebooklm.google.com/notebook/7f6d632c-4053-4e98-be47-c99078a6e73a" target="_blank" rel="noreferrer">
                <button className="btn-outline">Open Notebook ↗</button>
              </a>
            </div>
          </div>
        </div>

        <div className="sticker" style={{ marginTop: '24px' }}>
          <span className="handwrite">Goal: know Joshua's story before he does.</span>
        </div>
      </div>
    </div>
  )
}
