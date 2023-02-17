import Link from 'next/link';
import ListCard from '../ListCard/ListCard';
import { useAppSelector } from '../../store/hooks';
import { selectAllJobs } from '../../features/jobDataSlice';

const ListCardWrapper = () => {
  const allJobs = useAppSelector(selectAllJobs);
  console.log(allJobs);
  return (
    <div>
      {allJobs.map((job) => (
        <ListCard key={job.id} jobDetails={job} />
      ))}
    </div>
  );
};

export default ListCardWrapper;
