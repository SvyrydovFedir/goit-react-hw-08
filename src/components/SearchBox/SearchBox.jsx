import { useId } from 'react';
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { changefilter, selectNameFilter } from '../../redux/filtersSlice';

export const SearchBox = () => {
  const searchId = useId();
  const dispath = useDispatch();
  const reduxInputFilter = useSelector(selectNameFilter);

  return (
    <>
          <div className={css.formGroup}>
            <label htmlFor={searchId}>Find contacts by name</label>
            <input type="text" name="name" 
            id={searchId} value={reduxInputFilter} onChange={evt => {
              dispath(changefilter(evt.target.value));
            }}/>
          </div>
    </>
  );
};
