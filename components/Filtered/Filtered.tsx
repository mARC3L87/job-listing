import styles from '../Filtered/Filtered.module.scss';

const Filterd = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.col1}>
        <div className={styles.filteredDetails}>
          <p>Frontend</p>
          <span>X</span>
        </div>
        <div className={styles.filteredDetails}>
          <p>CSS</p>
          <span>X</span>
        </div>
        <div className={styles.filteredDetails}>
          <p>JavaScript</p>
          <span>X</span>
        </div>
      </div>
      <div className={styles.col2}>
        <button>Clear</button>
      </div>
    </div>
  );
};

export default Filterd;
