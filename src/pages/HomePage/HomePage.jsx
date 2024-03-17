import { useEffect, useState } from 'react';
import css from './HomePage.module.css';
import { getTrendingMovies } from '../../fetchAPI';
import { MovieList } from '../../components/MovieList/MovieList';

export default function HomePage() {
  const [trendings, setTrendings] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {
      try {
        const response = await getTrendingMovies(controller);
        // console.log(response);
        setTrendings(response.results);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      }
    }

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Trending movies today</h1>
      {error && <p>OPPPPPSSSSSSSSSSSS... UNKNOWN ERROR!</p>}
      {!error && <MovieList data={trendings} />}
    </div>
  );
}
