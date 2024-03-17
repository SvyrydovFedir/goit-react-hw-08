import { CastListItem } from '../CastListItem/CastListItem';
import css from './CastList.module.css';

export const CastList = ({ data }) => {
  //   console.log(data);
  return (
    <ul className={css.container}>
      {data
        .filter(item => item.profile_path !== null)
        .map(item => (
          <CastListItem data={item} key={item.id} />
        ))}
    </ul>
  );
};
