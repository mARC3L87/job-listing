import Image from 'next/image';
import backgroundHeader from '../../public/images/bg-header-desktop.svg';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <Image
        src={backgroundHeader}
        alt='background-image'
        width='100%'
        layout='fill'
        objectFit='cover'
        priority
      />
    </div>
  );
};

export default Header;
