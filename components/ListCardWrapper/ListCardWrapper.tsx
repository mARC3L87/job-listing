import { useEffect } from 'react';
import Link from 'next/link';
import ListCard from '../ListCard/ListCard';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { selectAllJobs } from '../../features/jobDataSlice';
import { addData } from '../../features/filteredJobSlice';
import styles from '../ListCardWrapper/ListCardWrapper.module.scss';

const ListCardWrapper = () => {
  const allJobs: any = useAppSelector(selectAllJobs);
  const dispatch = useAppDispatch();
  console.log(allJobs);
  useEffect(() => {});
  return (
    <div className={styles.wrapper}>
      {allJobs.map((job: any) => (
        <ListCard key={job.id} jobDetails={job} />
      ))}
    </div>
  );
};

export default ListCardWrapper;
