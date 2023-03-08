import Image from 'next/image';
import { jobData, filterByLanguage } from '../../features/jobDataSlice';
import { useAppDispatch } from '../../store/hooks';
import styles from '../ListCard/ListCard.module.scss';

interface ListCardProps {
  jobDetails: jobData;
}
const ListCard = ({ jobDetails }: ListCardProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className={styles.wrapper}>
      <div className={styles.col1}>
        <div className={styles.logoWrapper}>
          <Image
            src={jobDetails.logo}
            alt={jobDetails.company}
            width={60}
            height={60}
          />
        </div>
        <div className={styles.jobContent}>
          <div className={styles.jobCompanyDetails}>
            <p>{jobDetails.company}</p>
            {jobDetails.new && <p className={styles.new}>New!</p>}
            {jobDetails.featured && <p className={styles.featured}>Featured</p>}
          </div>
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
          <p
            onClick={(e: any) =>
              dispatch(filterByLanguage(e.currentTarget.innerText))
            }
            key={index}
          >
            {language}
          </p>
        ))}
        {jobDetails.tools.map((tool, index) => (
          <p key={index}>{tool}</p>
        ))}
      </div>
    </div>
  );
};

export default ListCard;
