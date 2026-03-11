import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const GOALS = [
  {
    num: "01",
    title: "Secure Physical Evidence",
    annotation: "Establish custody of the footage before anything else.",
    questions: [
      "Where is DSC_0042_RAW_RECOVERED.mov physically stored right now? Who else has access?",
      "Walk me through the first 30 seconds of that footage.",
      "Has anyone else seen this file since January 2024? Has it been copied?",
      "Why did you air-gap the device?",
    ],
  },
  {
    num: "02",
    title: "Verify Technical Data",
    annotation: "Push on the specifics -- data doesn't lie, but sources do.",
    questions: [
      "You mention GPS logs. What device recorded them and what do the coordinates show?",
      "14Hz is below the threshold of human hearing. What equipment captured that audio?",
      "People near infrasound often report dread or unease. Did you experience that?",
      "Has anyone with technical expertise independently reviewed your data?",
    ],
  },
  {
    num: "03",
    title: "Trace the Disappeared: Fitz",
    annotation: "A missing witness changes everything.",
    questions: [
      "Full name, how you knew each other, last confirmed contact with Fitz.",
      "Was Fitz with you at Bayside that night?",
      "What was Fitz's account of what they saw? Did it match yours?",
      "When exactly did Fitz go dark? Did they say anything before?",
      "Have police been notified? What was their response?",
    ],
  },
]

function GoalCard({ goal }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="goal-card">
      <div className="goal-card__header">
        <span className="goal-num">{goal.num}</span>
        <div className="goal-card__title">
          <h3>{goal.title}</h3>
          <span className="goal-card__annotation handwrite">{goal.annotation}</span>
        </div>
        <button className="goal-reveal-btn" onClick={() => setOpen(o => !o)}>
          {open ? "Hide Questions" : "Reveal Questions"}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="goal-card__questions"
            key="questions"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className="goal-card__questions-inner">
              {goal.questions.map((q, i) => (
                <div className="question-item" key={i}>
                  <span className="question-num">{i + 1}.</span>
                  <span className="question-text">"{q}"</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Interview() {
  return (
    <div className="interview-content">

      {/* Dossier card */}
      <div className="dossier-card">
        <div className="dossier-stamp">
          <span className="stamp sticker--red" style={{ background: 'var(--red)', color: 'white', border: '3px solid var(--red)' }}>
            Interview Subject
          </span>
        </div>
        <table className="dossier-table">
          <tbody>
            <tr>
              <th>Name</th>
              <td>Joshua Peter, 32</td>
            </tr>
            <tr>
              <th>Location</th>
              <td>Hialeah, FL</td>
            </tr>
            <tr>
              <th>Background</th>
              <td>Former blue-collar worker. Life unravelled after Jan 2024.</td>
            </tr>
            <tr>
              <th>Status</th>
              <td>Active whistleblower. Deeply cynical. Paranoid.</td>
            </tr>
            <tr>
              <th>Published</th>
              <td>Survivalist account, 2025 -- alleges government "containment failure"</td>
            </tr>
            <tr>
              <th>Evidence held</th>
              <td>DSC_0042_RAW_RECOVERED.mov (air-gapped, never publicly released)</td>
            </tr>
            <tr>
              <th>Key concern</th>
              <td>"Fitz" -- fellow witness believed removed by federal tactical teams</td>
            </tr>
          </tbody>
        </table>
        <p className="dossier-profile">
          Joshua was at Bayside Marketplace on New Year's Day 2024 when the incident occurred.
          He claims to have seen "Shadow Beings" phase through the mall's glass. Since then he has
          become one of the most prominent voices in the online community around the incident --
          but his account has grown more elaborate over time, and he has cut off most people
          who knew him before. He believes federal agencies have been monitoring him since 2024,
          and that Fitz's disappearance was deliberate. His survivalist account sold poorly
          but developed a cult following. Today he is being interviewed for the first time
          by an outside journalist.
        </p>
      </div>

      {/* Goal cards */}
      {GOALS.map(goal => (
        <GoalCard key={goal.num} goal={goal} />
      ))}

    </div>
  )
}
