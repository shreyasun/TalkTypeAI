import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <a href="/" className={styles.navLink}>Home</a>
          <button>Login</button>
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
              Get Started
            </a>
          </div>
        </div>

        {/* About Section */}
        <section className={styles.main}>
          <h3>About</h3>
          <ul className={styles.aboutList}>
            <li><p>Speaking or typing</p></li>
            <li><p>Mood analysis</p></li>
            <li><p>Prompts</p></li>
          </ul>
        </section>

      </main>
    </div>
  );
}
