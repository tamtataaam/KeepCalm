import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addComment } from '../../store/commentsSlice/commentsSlice';

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
    <form onSubmit={handleSubmit}>
      <textarea type="text" name="commentText" placeholder="Введите комментарий" rows="3" required />
      <button type="submit">Добавить комментарий</button>
    </form>
  );
}

export default AddComment;
