import css from './MovieLinks.module.css';
import { NavLink } from 'react-router-dom';

export const MovieLinks = () => {
  const buildLinkClass = ({ isActive }) => {
    return isActive ? css.isActive : css.link;
  };

  return (
    <div className={css.links}>
      <NavLink to={`cast`} className={buildLinkClass}>
        Cast
      </NavLink>
      <NavLink to={`reviews`} className={buildLinkClass}>
        Reviews
      </NavLink>
    </div>
  );
};
