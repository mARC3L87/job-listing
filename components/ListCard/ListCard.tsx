import Image from 'next/image';
import { jobData } from '../../features/jobDataSlice';
import styles from '../ListCard/ListCard.module.scss';

interface ListCardProps {
  jobDetails: jobData;
}
const ListCard = ({ jobDetails }: ListCardProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.col1}>
        <div className={styles.logoWrapper}>
          <Image
            src={jobDetails.logo}
            alt={jobDetails.company}
            width={50}
            height={50}
          />
        </div>
        <div className={styles.jobContent}>
          <p>{jobDetails.company}</p>
          <p>{jobDetails.position}</p>
          <ul className={styles.jobList}>
            <li>{jobDetails.postedAt}</li>
            <li>{jobDetails.contract}</li>
            <li>{jobDetails.location}</li>
          </ul>
        </div>
      </div>
      <div className={styles.col2}>
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
