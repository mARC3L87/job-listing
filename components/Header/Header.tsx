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
        height='100%'
        layout='responsive'
      />
    </div>
  );
};

export default Header;
