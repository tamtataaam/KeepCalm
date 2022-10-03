/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment, changeComment } from '../../store/commentsSlice/commentsSlice';

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
        <div className="comment_container">
          <span className="comment_author">{comment.User.name}</span>
          <div className="comment_content_container">

            {showEditCom === true
              ? (
                <div className="change_comment_div">
                  <form onSubmit={changeFunction}>
                    <textarea defaultValue={comment.commentText} name="commentText" rows={3} />
                    <button type="submit">Сохранить</button>
                  </form>
                </div>
              ) : (<p>{comment.commentText}</p>)}
            {userId === comment.userId ? (
              <div className="comment_buttons">
                <button onClick={() => setShowEditCom((prev) => !prev)}>✏️</button>
                <button onClick={deleteFunction}>❌</button>
              </div>
            ) : null}

          </div>
        </div>
        )}
    </>
  );
}

export default Comments;
