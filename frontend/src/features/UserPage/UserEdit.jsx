import React, { useState } from 'react';

function UserEdit({ user, setInfo }) {
  const [pasForm, setPasForm] = useState(true);
  const EditUser = (e) => {
    e.preventDefault();
    setInfo((prev) => !prev);
  };
  const EditPassword = (e) => {
    e.preventDefault();
    setPasForm(!pasForm);
  };
  console.log(pasForm);
  return (
    <>
      <div>
        {(user && user.photo)
          ? <img src={user.photo} alt="avatar" />
          : <img src="no_avatar.webp" alt="avatar" />}
      </div>
      <form onSubmit={EditUser}>
        <input type="text" name="name" defaultValue={user.name} />
        <input type="email" name="email" defaultValue={user.email} />
        <button type="submit">Изменить</button>
      </form>
      { pasForm
        ? <button type="button" onClick={() => setPasForm(!pasForm)}>Изменить пароь</button>
        : (
          <form onSubmit={EditPassword}>
            <input type="password" />
            <input type="password" />
            <button type="submit">Изменить пароль</button>
          </form>
        )}
    </>
  );
}
export default UserEdit;
