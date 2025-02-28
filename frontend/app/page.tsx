import Image from "next/image";
import logo from "./media/logo.png"
import styles from "./page.module.css";
import { BsJournalText } from "react-icons/bs";
import { BsJournals } from "react-icons/bs";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <a href="/" className={styles.navLink}><Image src={logo} alt="Logo" width={170} height={45}/></a>
          <div className={styles.ctas2}>
            <a
              className={styles.primary}
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsJournalText /> Login
            </a>
          </div>
        </div>
      </nav>

      <main className={styles.main}>
        <div className="center">
          <h1>TalkTypeAI</h1>
          <h2>AI-Powered Journaling App</h2>
          <br></br>
          <div className={styles.ctas}>
            <a
              className={styles.primary}
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsJournals /> Get Started
            </a>
          </div>
        </div>

        {/* About Section */}
        <section className={styles.main}>
          <h3>About</h3>
          <ul className={styles.aboutList}>
            <li><p>Voice-powered: Voice to text capability</p></li>
            <li><p>Mood analysis</p></li>
            <li><p>Prompts</p></li>
          </ul>
        </section>

      </main>
    </div>
  );
}
