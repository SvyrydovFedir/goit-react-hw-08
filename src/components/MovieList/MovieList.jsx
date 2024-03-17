import { MovieListItem } from '../MovieListItem/MovieListItem';
import css from './MovieList.module.css';

export const MovieList = ({ data }) => {
  return (
    <ul className={css.container}>
      {data.map(item => (
        <MovieListItem key={item.id} data={item} />
      ))}
    </ul>
  );
};
