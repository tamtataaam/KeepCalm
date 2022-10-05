import React from 'react';
import style from './PsychologistPage.module.scss';

function PsychologistPage() {
  return (
    <div className={style.main_container}>
      <div className={style.container}>
        <div>
          <h3>Здесь вы можете найти помощь в подборе психолога</h3>
        </div>
        <div className={style.container_reccomendations}>
          <div className={style.reccomendations}>
            <div className={style.one_reccomendation}>
              <a href="https://alter.ru/">
                <img
                  className={style.img}
                  src="/PsyhoPic/alter.png"
                  alt="..."
                />
              </a>
              <div style={{ paddingTop: '40px' }}>
                Alter — сервис подбора психологов на основе научного алгоритма,
                разработанного на базе Психологического института РАО*.
              </div>
            </div>
            <div className={style.one_reccomendation}>
              <a href="https://bemeta.co/">
                <img
                  className={style.img}
                  src="/PsyhoPic/meta.webp"
                  alt="..."
                />
              </a>
              <div style={{ paddingTop: '30px' }}>
                Мета — сервис подбора проверенных психотерапевтов Наша миссия —
                сделать психотерапию в России понятной для каждого и убрать
                барьеры перед обращением за психологической помощью
              </div>
            </div>
            <div className={style.one_reccomendation}>
              <a href="https://yasno.live/">
                <img
                  className={style.img}
                  src="/PsyhoPic/yasno.svg"
                  alt="..."
                />
              </a>
              <div style={{ paddingTop: '10px' }}>
                «Ясно» — сервис видео-консультаций с психотерапевтом. Подходящий
                специалист подбирается автоматически: пользователю нужно указать
                имя, возраст и часовой пояс, желаемый пол специалиста, отметить,
                был ли опыт работы с психотерапевтом, выбрать свои симптомы и
                вопросы, которые необходимо обсудить.
              </div>
            </div>
          </div>
          <div>
            {' '}
            <div className={style.one_reccomendation}>
              <a href="https://youtalk.ru/">
                <img
                  className={style.img}
                  src="/PsyhoPic/youtalk.svg"
                  alt="..."
                />
              </a>
              <div style={{ paddingTop: '10px' }}>
                YouTalk - Это онлайн-сервис психологической помощи, созданный
                командой выпускников факультета психологии МГУ им. М.В.
                Ломоносова. Мы помогаем людям найти своего специалиста и
                получить профессиональную поддержку в удобном и современном
                формате.
              </div>
            </div>
            <div className={style.one_reccomendation}>
              <a href="https://zigmund.online/offer">
                <img
                  style={{ paddingTop: '50px', borderRadius: '0px' }}
                  className={style.img}
                  src="/PsyhoPic/zigmund.svg"
                  alt="..."
                />
              </a>
              <div style={{ paddingTop: '20px' }}>
                Zigmund.Online — сервис для онлайн-психотерапии. Делает
                психотерапию удобной. Сервис зял все организационные заботы на
                себя, чтобы вы могли сосредоточиться на самом важном — себе и
                своих эмоциях
              </div>
            </div>
            <div className={style.one_reccomendation}>
              <a href="https://psypsy.online/">
                <img
                  style={{ paddingTop: '90px', borderRadius: '0px' }}
                  className={style.img}
                  src="/PsyhoPic/psy.png"
                  alt="..."
                />
              </a>
              <div style={{ paddingTop: '70px' }}>
                Psy Psy — онлайн-сервис психологического консультирования по
                подписке. Для начала работы пользователю нужно
                зарегистрироваться и заполнить анкету, описав свои запросы и
                состояние.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PsychologistPage;
