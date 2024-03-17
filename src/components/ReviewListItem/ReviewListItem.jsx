import css from './ReviewListItem.module.css';

export const ReviewListItem = ({ data: { author, content } }) => {
  return (
    <div>
      <p className={css.author}>{author}:</p>
      <p className={css.content}>{content}</p>
    </div>
  );
};
