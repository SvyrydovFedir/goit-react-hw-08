import css from "./SearchBox.module.css";

export const SearchBox = ({value, onChange}) => {

  return (
    <>
          <div className={css.formGroup}>
            <label htmlFor='name'>Find contacts by name</label>
            <input type="text" name="name" value={value} onChange={onChange}/>
          </div>
    </>
  );
};
