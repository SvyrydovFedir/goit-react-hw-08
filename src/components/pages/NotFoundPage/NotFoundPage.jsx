import { NavLink } from 'react-router-dom';
import css from './NotFoundPage.module.css';
import { TbError404 } from 'react-icons/tb';

export default function NotFoundPage() {
  return (
    <div className={css.container}>
      <TbError404 size={150} />
      <p className={css.text}>Ooooops, not found page!</p>
      <NavLink to="/" className={css.link}>
        Go to the home page...
      </NavLink>
    </div>
  );
}
