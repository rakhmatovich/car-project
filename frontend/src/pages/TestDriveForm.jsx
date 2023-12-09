import React, { useState } from "react";
import Layout from "../components/Layout";

export default function TestDriveForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998");
  const [comment, setComment] = useState("");

  return (
    <Layout>
      <div className="td-form">
        <div className="fuul">
          <h2>Тест-драйв</h2>
        </div>
        <hr className="lini" />
        <div className="td-main">
          <div className="vell">
            <h2>K5</h2>
            <img
              src="https://cdn.kia-motors.uz/uploads/gallery/original-0a635b.png"
              alt=""
            />
            <p>Стоимость авто</p>
            <h5 className="rev">от 359 900 000 сум</h5>
          </div>
          <form className="test-drive-form">
            <div>
              <h3>Ваши контакты</h3>
              <p className="form-subtitle">Поля, отмеченные *, обязательны для заполнения</p>
            </div>
            <input
              type="text"
              value={name}
              onInput={(e) => setName(e.target.value)}
              required
              placeholder="Имя*"
            />
            <input
              type="text"
              value={phone}
              onInput={(e) => setPhone(e.target.value)}
              required
            />

            <textarea
              cols="30"
              value={comment}
              onInput={(e) => setComment(e.target.value)}
              placeholder="Ваш комментарий или вопрос"
              rows="5"
            ></textarea>
            <div className="check-field">
              <input type="checkbox" />
              <p>
                Проставляя отметку, я выражаю свое согласие и разрешаю ООО
                'Roodell', а также, по их поручению, третьим лицам осуществлять
                обработку моих персональных данных (фамилия, имя, отчество, год,
                месяц, дата и место рождения; адрес, номер паспорта и сведения о
                дате выдачи паспорта и выдавшем его органе; образование,
                профессия, место работы и должность; домашний, рабочий и
                мобильный телефоны; адрес электронной почты и другие данные,
                требуемые для отправки сообщения), включая сбор, систематизацию,
                накопление, хранение, уточнение, использование, распространение
                (в том числе трансграничную передачу), обезличивание,
                уничтожение персональных данных), в целях связанных с
                возможностью предоставления информации о товарах и услугах,
                которые потенциально могут представлять интерес, а также в целях
                сбора и обработки статистической информации и проведения
                маркетинговых исследований. Согласие на обработку персональных
                данных в соответствии с указанными выше условиями я предоставляю
                на 10 (десять) лет. Я уведомлен и согласен с тем, что указанное
                согласие может быть мной отозвано посредством направления
                письменного заявления заказным почтовым отправлением с описью
                вложения, либо вручено лично под подпись.
              </p>
            </div>
            <button type="submit">Отправить заявку</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
