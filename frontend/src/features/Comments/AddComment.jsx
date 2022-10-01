import React from 'react';

function AddComment() {
  return (
    <form>
      <textarea type="text" name="content" placeholder="Введите комментарий" rows="3" required />
      <button className="font_caption_small" type="submit">Добавить комментарий</button>
    </form>
  );
}

export default AddComment;
