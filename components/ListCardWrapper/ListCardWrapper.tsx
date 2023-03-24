import { useEffect } from 'react';
import Link from 'next/link';
import ListCard from '../ListCard/ListCard';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { selectAllJobs } from '../../features/jobDataSlice';
import { addData, selectFilterdJobs } from '../../features/filteredJobSlice';
import styles from '../ListCardWrapper/ListCardWrapper.module.scss';

const ListCardWrapper = () => {
  const allJobs: any = useAppSelector(selectAllJobs);
  const filteredJobs = useAppSelector(selectFilterdJobs);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addData(allJobs));
  }, [dispatch, allJobs]);
  return (
    <div className={styles.wrapper}>
      {filteredJobs.filter && filteredJobs.filter.length
        ? filteredJobs.filter.map((job: any) => (
            <ListCard key={job.id} jobDetails={job} />
          ))
        : allJobs.map((job: any) => <ListCard key={job.id} jobDetails={job} />)}
    </div>
  );
};

export default ListCardWrapper;
