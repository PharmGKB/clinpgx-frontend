import presentations from './presentations.json';
import styles from './page.module.css';
import Link from "next/link";

export default function Meeting2024() {
  return (
    <main className="container">
      <h1 className={styles.meeting}>ClinPGx 2024 Meeting</h1>
      <p>June 20-21, 2024<br/>University of Pennsylvania<br/>Philadelphia, PA</p>

      {presentations.map((session) => (
        <section key={session.id} className={styles.session}>
          <h2>Session {session.id}: {session.title}</h2>
          {session.talks.map((talk) => (
            <div key={talk.title} className={styles.talk}>
              <div className={styles.title}>{talk.title}</div>
              <div className={styles.presenter}><ul className="m-0">{talk.presenter.map((p) => <li key={p}>{p}</li>)}</ul></div>
              <div>
                <div className="d-inline me-2">{talk.videoUrl && (<Link href={talk.videoUrl}>Video</Link>)}</div>
                <div className="d-inline">{talk.slidesUrl && (<Link href={talk.slidesUrl}>Slides</Link>)}</div>
              </div>
            </div>
          ))}
        </section>
      ))}
    </main>
);
}
