import Image from 'next/image';
import { jobData } from '../../features/jobDataSlice';

interface ListCardProps {
  jobDetails: jobData;
}
const ListCard = ({ jobDetails }: ListCardProps) => {
  return (
    <div className='wrapper'>
      <div className='col-1'>
        <div className='logo-wrapper'>
          <Image
            src={jobDetails.logo}
            alt={jobDetails.company}
            width={50}
            height={50}
          />
        </div>
        <div className='job-content'>
          <p>{jobDetails.company}</p>
          <p>{jobDetails.position}</p>
          <ul>
            <li>{jobDetails.postedAt}</li>
            <li>{jobDetails.contract}</li>
            <li>{jobDetails.location}</li>
          </ul>
        </div>
      </div>
      <div className='col-2'>
        <p>{jobDetails.role}</p>
        <p>{jobDetails.level}</p>
        {jobDetails.languages.map((language, index) => (
          <p key={index}>{language}</p>
        ))}
      </div>
    </div>
  );
};

export default ListCard;
