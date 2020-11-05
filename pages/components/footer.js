import styles from '../../styles/Home.module.scss'
import React from 'react'

export default function Footer() {

    return (
        <footer className={styles.footer}>
          <a
            className={styles.footerLink}
            href="https://www.deezer.com/us/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/firebolt.svg" alt="Firebolt Logo" className={styles.logo} />
            {' '} Music data powered by:
            
          </a>
            <a 
            href="/deezer.png"
            href="https://www.deezer.com/us/"
            target="_blank"
            >
              <img src="/deezer.png" alt="Firebolt Logo" className={styles.deezer} />
            </a>
        </footer>
    )
  }