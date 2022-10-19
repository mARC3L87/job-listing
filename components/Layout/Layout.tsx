import styles from './Layout.module.scss';
import Header from '../Header/Header';

interface PropTypes {
  children: React.ReactNode;
}
const Layout = ({ children }: PropTypes) => {
  return (
    <>
      <Header />
      <div className={styles.container}>{children}</div>
    </>
  );
};

export default Layout;
