import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink
      exact="true"
      to="/"
      className={styles.link}
    >
      Welcome
    </NavLink>

    <NavLink
      to="/users"
      className={styles.link}
    >
      Users
    </NavLink>

    <NavLink
      to="/groups"
      className={styles.link}
    >
      Groups
    </NavLink>
  </nav>
);

export default Navigation;