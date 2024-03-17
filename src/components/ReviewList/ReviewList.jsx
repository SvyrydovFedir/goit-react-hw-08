import { ReviewListItem } from '../ReviewListItem/ReviewListItem';
import css from './ReviewList.module.css';

export const ReviewList = ({ data }) => {
  return (
    <ul>
      {data.map(item => (
        <ReviewListItem key={item.id} data={item} />
      ))}
    </ul>
  );
};
