import { NavLink, Outlet, useLocation } from 'react-router-dom';
import css from './MovieDetails.module.css';
import { MovieLinks } from '../MovieLinks/MovieLinks';
import { MovieInfoBox } from '../MovieInfoBox/MovieInfoBox';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Suspense, useRef } from 'react';

export const MovieDetails = ({
  data: { title, backdrop_path, overview, vote_average, release_date, genres },
}) => {
  const location = useLocation();
  const backLinkRef = useRef(location.state);
  return (
    <div className={css.container}>
      <NavLink to={backLinkRef.current ?? '/movies'} className={css.backLink}>
        <FaArrowLeftLong />
        <p>Back to all movies</p>
      </NavLink>
      <h1 className={css.title}>{title}</h1>
      <div className={css.mainbox}>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
            alt={title}
            height={350}
            width={550}
          />
        </div>
        <MovieInfoBox
          data={release_date}
          ranking={vote_average}
          genres={genres}
        />
      </div>
      <p className={css.overviewTitle}>{`Overview of "${title}":`}</p>
      <p className={css.overview}>{overview}</p>
      <MovieLinks />
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
