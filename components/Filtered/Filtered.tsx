import { useEffect } from 'react';
import {
  selectKeywords,
  removeKeywords,
  filterByLanguage,
  clearFilteredArray,
} from '../../features/filteredJobSlice';
import { selectAllJobs } from '../../features/jobDataSlice';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import styles from '../Filtered/Filtered.module.scss';

const Filterd = () => {
  const selectedKeywords = useAppSelector(selectKeywords);
  const dispatch = useAppDispatch();
  const allJobs: any = useAppSelector(selectAllJobs);
  useEffect(() => {
    if (!selectedKeywords || !selectedKeywords.length) {
      dispatch(clearFilteredArray());
    } else {
      dispatch(
        filterByLanguage(
          selectedKeywords.find((word: string) => word).toString()
        )
      );
    }

    console.log(selectedKeywords);
  }, [selectedKeywords, dispatch]);

  if (!selectedKeywords || !selectedKeywords.length) {
    return;
  }
  return (
    <div className={styles.wrapper}>
      {selectedKeywords &&
        selectedKeywords.map((word: string, index: number) => (
          <div key={index} className={styles.col1}>
            <div className={styles.filteredDetails}>
              <p>{word}</p>
              <span onClick={() => dispatch(removeKeywords(index))}>X</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Filterd;
