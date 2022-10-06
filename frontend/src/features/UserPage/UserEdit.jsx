import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { EditInfo, passwordEdit, addPhoto } from '../../store/userSlice/userSlice';
// import { style } from '@mui/system';
import style from './UserPage.module.scss';
// import { style } from '@mui/system';

function UserEdit({ setInfo }) {
  const helpMessage = useSelector((state) => state.user.helpMessage);
  const user = useSelector((store) => store.user.data);

  const dispatch = useDispatch();
  const EditUser = (e) => {
    e.preventDefault();
    const info = {
      name: e.target.name.value,
      email: e.target.email.value,
      userid: user.id
    };
    dispatch(EditInfo(info));
    setInfo((prev) => !prev);
  };
  const EditPassword = (e) => {
    e.preventDefault();
    const pass = {
      password: e.target.password.value,
      repeatPassword: e.target.repeatPassword.value,
      userid: user.id
    };
    dispatch(passwordEdit(pass));
  };
  const photoAdd = async (e) => {
    const picturesData = [...e.target.files];
    const data = new FormData();
    picturesData.forEach((img) => {
      data.append('homesImg', img);
    });
    dispatch(addPhoto({ file: data, id: user.id }));
  };
  const fileRef = useRef();
  //   const allowedExtensions = /png|jpeg|jpg|gif|webp/gi;
  const ClickInput = () => {
    fileRef.current.click();
  };
  const [state, setState] = useState(false);
  const toggleBtn = () => {
    setState((prev) => !prev);
  };
  return (

    <div>
      <div>
        <div className={style.userPhoto}>
          <Avatar src={user.avatar} sx={{ width: '250px', height: '250px' }} />
        </div>

        <div className={style.div_btn_photo}>
          <input className={style.file_input} onChange={photoAdd} type="file" multiple autoComplete="off" ref={fileRef} accept="image/jpeg,image/png,image/gif" />
          <button className={style.btn_file} type="button" onClick={ClickInput}>Изменить фото</button>
        </div>
      </div>
      <div className={style.info_edit_div}>
        <form onSubmit={EditUser}>
          <input className={style.input} type="text" name="name" defaultValue={user.name} placeholder="Имя" required />
          <input
            className={style.input}
            type="email"
            name="email"
            defaultValue={user.email}
            pattern="^\S+@\S+\.\S+$"
            title="Почта должна быть указана в формате email@mail.com"
            placeholder="Email"
            required
          />
          <button className={style.button_edit_profile} type="submit">Изменить профиль</button>
        </form>

        <form className={style.form_password} onSubmit={EditPassword}>
          <input
            className={style.input}
            type="password"
            name="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Пароль должен быть не менее 8 символов, а также содержать не менее одной цифры, одной прописной и строчной буквы"
            placeholder="Пароль"
          />
          <button type="button" onClick={toggleBtn} className={style.password_button}>
            { state ? <AiOutlineEye /> : <AiOutlineEyeInvisible /> }
          </button>
          <input className={style.input} type="password" name="repeatPassword" placeholder="Повторите пароль" />
          <button type="button" onClick={toggleBtn} className={style.password_button}>
            { state ? <AiOutlineEye /> : <AiOutlineEyeInvisible /> }
          </button>
          { helpMessage ? <div className="helpText">{helpMessage}</div> : <div />}
          <button className={style.button_password} type="submit">Изменить пароль</button>
        </form>
      </div>
    </div>
  );
}
export default UserEdit;
