import { selectKeywords } from '../../features/filteredJobSlice';
import { useAppSelector } from '../../store/hooks';
import styles from '../Filtered/Filtered.module.scss';

const Filterd = () => {
  const selectedKeywords = useAppSelector(selectKeywords);
  console.log(selectedKeywords);
  if (!selectedKeywords) {
    return;
  }
  return (
    <div className={styles.wrapper}>
      {selectedKeywords &&
        selectedKeywords.map((word: string, index: number) => (
          <div key={index} className={styles.col1}>
            <div className={styles.filteredDetails}>
              <p>{word}</p>
              <span>X</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Filterd;
