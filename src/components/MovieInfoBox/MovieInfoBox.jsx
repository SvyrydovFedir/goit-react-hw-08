import css from './MovieInfoBox.module.css';
import { format } from 'date-fns';

export const MovieInfoBox = ({ data, ranking, genres }) => {
  const dataMovie = data ? data.split('-') : ['1901', '01', '01'];
  const movieGenres = genres
    ? genres.map(item => item.name).join(', ')
    : ['none'];
  return (
    <div>
      <p className={css.info}>
        Ranking:{' '}
        <span className={css.infoValue}>
          {(Math.round(ranking * 100) / 100).toString()}
        </span>
      </p>
      <p className={css.info}>
        Date:{' '}
        <span className={css.infoValue}>
          {format(new Date(dataMovie), 'PP')}
        </span>
      </p>
      <p className={css.info}>
        Genres: <span className={css.infoValue}>{movieGenres}</span>
      </p>
    </div>
  );
};
