import styles from './footer.module.scss';
import React from 'react';

export default function Footer() {

    return (
        <footer className={styles.footer}>
          <a
            className={styles.footerLink}
            href="https://www.deezer.com/us/"
            target="_blank"
            rel="noopener noreferrer">
              <img src="/firebolt.svg" alt="Firebolt Logo" width="12px" height="12px" className={styles.logo} />
            {' '} Music data powered by
            
          </a>
            <a 
              rel="noopener noreferrer"
              href="https://www.deezer.com/us/"
              target="_blank">
                <img src="/deezer_small.png" alt="Firebolt Logo" width="150px" height="60px" className={styles.deezer} />
            </a>
        </footer>
    )
  }