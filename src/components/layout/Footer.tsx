import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.copyrightContainer}>
          <p className={styles.copyrightText}>
            © {new Date().getFullYear()} S. Nicholas Barton. All rights
            reserved.
          </p>
        </div>
        <div className={styles.linksContainer}>
          <Link to="/ai-statement" className={styles.link}>
            AI statement
          </Link>
          <Link to="/about-site" className={styles.link}>
            How this site works
          </Link>
          <a
            href="https://github.com/snicholasbarton"
            className={styles.socialLink}
          >
            <span className="sr-only">GitHub</span>
            {/* GitHub Icon Placeholder */}
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/nicholas-barton-a7311a113"
            className={styles.socialLink}
          >
            <span className="sr-only">LinkedIn</span>
            {/* LinkedIn Icon Placeholder */}
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};
