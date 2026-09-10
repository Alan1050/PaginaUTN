import styles from './FooterPosgrados.module.css';

const FooterPosgrados = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.linksGrid}>
          <a
            href="https://rizoma.conahcyt.mx/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            Rizoma CONAHCYT
          </a>
          <a
            href="https://www.secihti.mx/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            SECIHTI
          </a>
          <a
            href="https://apeiron.secihti.mx/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            Apeiron SECIHTI
          </a>
          <a
            href="https://proyectos.secihti.mx/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            Proyectos SECIHTI
          </a>
          <a
            href="https://www.anuies.mx/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            ANUIES
          </a>
          <a
            href="https://cocyten-investigadores.nayarit.gob.mx/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            COCYTEN Investigadores
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterPosgrados;
