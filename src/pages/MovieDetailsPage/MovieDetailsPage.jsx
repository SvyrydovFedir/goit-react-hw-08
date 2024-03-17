import { useParams } from 'react-router-dom';
import css from './MovieDetailsPage.module.css';
import { useEffect, useState } from 'react';
import { getMovieById } from '../../fetchAPI';
import { MovieDetails } from '../../components/MovieDetails/MovieDetails';

export default function MovieDetailsPage() {
  const [film, setFilm] = useState({});
  const params = useParams();
  const id = params.movieId;

  useEffect(() => {
    const controller = new AbortController();
    async function fetchDataId() {
      try {
        const response = await getMovieById(controller, id);
        // console.log(response);
        setFilm(response);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          console.log(error);
        }
      }
    }
    fetchDataId();
    return () => {
      controller.abort();
    };
  }, [id]);

  return (
    <div>
      <MovieDetails data={film} />
    </div>
  );
}
