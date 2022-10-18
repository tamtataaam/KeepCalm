import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addComment } from '../../store/commentsSlice/commentsSlice';
import style from '../ArticlesPage/ArticlesPage.module.scss';

function AddComment() {
  const { id } = useParams();
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    const commentText = e.target.commentText.value;
    const data = {
      articleId: Number(id),
      commentText,
    };
    dispatch(addComment(data));
    e.target.reset();
  }

  return (
    <form className={style.comment_form} onSubmit={handleSubmit}>
      <textarea className={style.comment_textarea} type="text" name="commentText" placeholder="Напиши комментарий" rows="3" required />
      <button className={style.add_comment_button} type="submit">Добавить комментарий</button>
    </form>
  );
}

export default AddComment;
