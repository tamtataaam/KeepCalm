/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment, changeComment } from '../../store/commentsSlice/commentsSlice';
import style from '../ArticlesPage/ArticlesPage.module.scss';

function Comments({ comment, oneArticleInfo }) {
  const [showEditCom, setShowEditCom] = useState(false);
  const userId = useSelector((state) => state.user.data.id);
  const dispatch = useDispatch();

  const data = {
    commentId: comment.id,
    articleId: oneArticleInfo.id,
  };
  const deleteFunction = () => {
    dispatch(deleteComment(data));
  };

  const changeFunction = (e) => {
    e.preventDefault();
    const commentText = e.target.commentText.value;
    const changedComment = {
      commentText,
      commentId: comment.id,
      articleId: oneArticleInfo.id,
    };
    dispatch(changeComment(changedComment));
    setShowEditCom((prev) => !prev);
  };
  return (
    <>
      {comment
        && (
        <div className={style.comment_container}>
          <span className={style.comment_author}>
            {comment.User.name}
            :
          </span>
          <div className={style.comment_content}>

            {showEditCom === true
              ? (
                <div>
                  <form className={style.change_comment_container} onSubmit={changeFunction}>
                    <textarea className={style.change_textarea} defaultValue={comment.commentText} name="commentText" rows={3} />
                    <button className={style.save_changes_button} type="submit">Сохранить</button>
                  </form>
                </div>
              ) : (<p>{comment.commentText}</p>)}
            {userId === comment.userId ? (
              <div className={style.comment_buttons}>
                <button type="button" className={style.change_comment_button} onClick={() => setShowEditCom((prev) => !prev)}>Изменить</button>
                <button type="button" className={style.delete_comment_button} onClick={deleteFunction}>Удалить</button>
              </div>
            ) : null}

          </div>
        </div>
        )}
    </>
  );
}

export default Comments;
