import { useEffect, useState } from "react";
import { SearchBox } from "../../components/SearchBox/SearchBox";
import css from "./MoviesPage.module.css";
import { Toaster, toast } from "react-hot-toast";
import { getMovieByQuery } from "../../fetchAPI";
import { MovieList } from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

export default function MoviesPage() {
  const [params, setParams] = useSearchParams();
  const filter = params.get("query") ?? "";
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState(() => {
    return filter === "" ? "" : filter;
  });

  const changeFilter = (newFilter) => {
    params.set("query", newFilter);
    setParams(params);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    const controller = new AbortController();
    async function fetchMovieQuery() {
      try {
        const response = await getMovieByQuery(controller, query);
        if (response.results.length === 0) {
          toast.error("No matches with your query");
        }
        setMovies(response.results);
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
          console.log(error);
        }
      }
    }

    fetchMovieQuery();

    return () => {
      controller.abort();
    };
  }, [query, filter]);

  return (
    <div className={css.container}>
      <SearchBox onQuery={setQuery} value={filter} onChange={changeFilter} />
      {movies.length === 0 && (
        <p className={css.empty}>Let`s find some movies...</p>
      )}
      {movies.length > 0 && <MovieList data={movies} />}
      <Toaster position="top-right" />
    </div>
  );
}
