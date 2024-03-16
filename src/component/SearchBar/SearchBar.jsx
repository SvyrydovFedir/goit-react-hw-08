import css from './SearchBar.module.css';
import toast from 'react-hot-toast';
import { CiSearch } from 'react-icons/ci';

export const SearchBar = ({ onSearch }) => {
  const handleSubmit = e => {
    e.preventDefault();
    if (e.target.query.value.trim() === '') {
      toast.error('Please enter a query to search for images!');
      return;
    }
    onSearch(e.target.query.value);
    e.target.reset();
  };

  return (
    <div className={css.container}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.input}
          type="text"
          name="query"
          placeholder="Search images and photos"
        />
        <button className={css.button}>
          <CiSearch />
        </button>
      </form>
    </div>
  );
};
