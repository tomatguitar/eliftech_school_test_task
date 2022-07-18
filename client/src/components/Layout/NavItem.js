import { NavLink } from 'react-router-dom';

const NavItem = ({ path, title, classes }) => {
  return (
    <li>
      <NavLink to={path} className={({ isActive }) => (isActive ? classes.active : undefined)}>
        {title}
      </NavLink>
    </li>
  );
};

export default NavItem;
