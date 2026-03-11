import Sidebar from "./components/Sidebar"
import Interview from "./components/Interview"
import "./styles.css"

export default function App() {
  return (
    <div className="app">

      {/* HERO HEADER */}
      <header className="hero">

        <div className="hero-presenter">
          <span className="handwrite">The Matts present</span>
        </div>

        <div className="hero-top">
          <span className="stamp">Cardiff University Workshop</span>
          <span className="stamp stamp--red">Jan 2024</span>
        </div>

        <div className="hero-main">
          <h1 className="oversized">MIAMI<br/>MALL<br/>INCIDENT</h1>

          <div className="hero-context">
            <p className="incident-brief">
              New Year's Day, 2024. A mass police response floods Miami's Bayside Marketplace.
              Official story: a teenage brawl. Online story: 10-foot interdimensional beings
              phase through the glass. The footage goes viral. Governments go quiet.
              One witness refuses to.
            </p>
            <div className="sticker-cluster">
              <div className="sticker sticker--rotate">
                <span className="handwrite">Is Joshua telling the truth?</span>
              </div>
              <div className="sticker" style={{ transform: 'rotate(2.5deg)' }}>
                <span className="handwrite">What happened to Fitz?</span>
              </div>
              <div className="sticker sticker--red" style={{ transform: 'rotate(-1deg)' }}>
                <span className="handwrite">Who ordered the blackout?</span>
              </div>
              <div className="sticker" style={{ transform: 'rotate(1deg)' }}>
                <span className="handwrite">Cover-up confirmed?</span>
              </div>
            </div>
          </div>
        </div>

        {/* VIDEO ROW */}
        <div className="hero-video-row">
          <div className="video-card">
            <div className="tape" style={{ top: '-12px', left: '48px' }} />
            <a
              href="https://www.youtube.com/watch?v=Ek_8t1sdvGc"
              target="_blank"
              rel="noreferrer"
              className="video-thumb-link"
            >
              <img
                src="https://img.youtube.com/vi/Ek_8t1sdvGc/hqdefault.jpg"
                alt="Bayside Marketplace incident footage, 1 Jan 2024"
                className="video-thumb"
              />
              <div className="video-play-btn">▶</div>
            </a>
            <span className="handwrite video-caption">Bayside Marketplace -- 1 Jan 2024 ↗</span>
          </div>
          <div className="hero-video-aside">
            <p>
              Joshua Peter, 32, was a blue-collar worker from Hialeah when he attended
              Bayside that night. He claims he witnessed "Shadow Beings" phase through
              the mall's glass. In the weeks that followed, his life unravelled.
            </p>
            <p>
              By 2025 he had self-published a survivalist account detailing what he calls
              a coordinated government cover-up and "containment failure." Now, in 2026,
              he is a deeply cynical and paranoid source -- but he says he holds
              uncorrupted digital evidence the public has never seen.
            </p>
            <p>
              He is especially haunted by "Fitz" -- a fellow witness he believes was
              removed by federal tactical teams. Today you will interview him.
            </p>
            <div className="sticker" style={{ marginTop: '20px', transform: 'rotate(-1deg)' }}>
              <span className="handwrite">Does the evidence exist -- or is Joshua the story?</span>
            </div>
          </div>
        </div>

        <div className="ruled-line" />
      </header>

      {/* EXERCISE 01 */}
      <section className="exercise ex-01">
        <div className="exercise-eyebrow">
          <span className="stamp">Exercise 01</span>
        </div>
        <h2>Background<br/>Research</h2>
        <Sidebar />
      </section>

      <div className="ruled-line" />

      {/* EXERCISE 02 */}
      <section className="exercise ex-02">
        <div className="exercise-eyebrow">
          <span className="stamp">Exercise 02</span>
        </div>
        <h2>Interview:<br/>Joshua Peter</h2>
        <Interview />
      </section>

    </div>
  )
}
