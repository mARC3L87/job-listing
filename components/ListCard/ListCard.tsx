import { jobData } from '../../features/jobDataSlice';

interface ListCardProps {
  jobDetails: jobData;
}
const ListCard = ({ jobDetails }: ListCardProps) => {
  return (
    <div>
      <p>{jobDetails.languages}</p>
    </div>
  );
};

export default ListCard;
