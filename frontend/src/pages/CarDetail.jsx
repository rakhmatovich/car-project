import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";

export default function CarDetail() {
  const params = useParams();
  return (
    <Layout>
      <div className="detail-header">
        <div className="d-car-price">
          <p>от 379 900 000 сум</p>
          <button className="common-btn">Свяжитесь с нами</button>
        </div>
        <div className="dh-info">
          <div>
            <p>Kia</p>
            <h1>Новый Seltos</h1>
            <p>Уже в Узбекистане!</p>
          </div>
          <div className="dh-tablo">
            <div className="dh-tablo-item">
              <img
                src="https://cdn.kia-motors.uz/uploads/gallery/original-c65ffa.svg"
                alt="check"
              />
              <p>2.0 MPI / 147 л.c</p>
            </div>
            <div className="dh-tablo-item">
              <img
                src="https://cdn.kia-motors.uz/uploads/gallery/original-4e4abf.svg"
                alt="check"
              />
              <p>Мультимедиа 8</p>
            </div>
            <div className="dh-tablo-item">
              <img
                src="https://cdn.kia-motors.uz/uploads/gallery/original-9b660e.svg"
                alt="check"
              />
              <p>Система выбора режима движения (Drive Mode Select)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="block">
        <div className="car-inf">
          <div className="in-inf">
            <h1>
              Автомобиль, <br /> созданный для Вас
            </h1>
            <p>
              Обновленный экстерьер делает Kia Seltos проводником в будущее.
              Кузов кроссовера стал элегантнее, обретя еще более стильные формы
              за счет изменения дизайна задней части автомобиля и
              модернизированной оптики. Оснащенный передовыми технологиями новый
              Kia Seltos погружает вас в атмосферу комфорта и уверенности на
              дороге.
            </p>
          </div>
          <img className="sel-img" src="/original.jpg" alt="" />
        </div>
      </div>
      <div className="block">
        <div className="midl-tx">
          <div>
            <p className="fuu">Экстерьер</p>
            <h1>Выразительный дизайн</h1>
            <p>
              Эффектная решетка радиатора, уникальная графика передних и задних
              фонарей Starmap* в сочетании с футуристическим дизайном колесных
              дисков делают новый Kia Seltos заметным на дороге. * Фирменная
              световая стилистика фар «Стармэп»
            </p>
            <hr className="mt-30" />
            <div className="mind-tx">
              <h4>Атлетичный силуэт кузова</h4>
              <p>Светодиодные фары</p>
              <p>Обновленная решетка радиатора</p>
              <p>Стильные задние фонари</p>
              <p>Светодиодные противотуманные фары</p>
              <p>18" легкосплавные диски</p>
            </div>
          </div>
          <div>
            <img className="seltosv" src="/seltosv.webp" alt="" />
            <p className="kan">Единство стиля и гармония в каждой линии</p>
          </div>
        </div>
      </div>
      <div className="block">
        <div className="midl-tx midl-tx-2">
          <div>
            <p className="fuu">Интерьер</p>
            <h1>Продуманность в каждой детали</h1>
            <p>
              Технологии, которыми оснащен новый Kia Seltos, созданы для
              удобства и вдохновения. Элементы управления расположены с
              максимальной эффективностью и комфортом для водителя.
            </p>
            <hr className="mt-30" />
            <div className="mind-tx">
              <h5>8" дисплей</h5>
              <p>Приборная панель Supervision c цветным дисплеем 4.2''</p>
              <p>Проекционный дисплей</p>
              <p>Люк в крыше</p>
              <p>Электропривод двери багажника</p>
              <p>Электропривод двери багажника</p>
            </div>
          </div>
          <div>
            <img className="seltosv" src="/an.jpeg" alt="" />
            <p className="ken">
              Компоновка цифровой панели инструментов и мультимедийного дисплея
              дополняет образ современного высокотехнологичного салона.
            </p>
          </div>
        </div>
      </div>
      <div className="block">
        <div className="midl-tx midl-tx-3">
          <div>
            <p className="fuu">Комфорт</p>
            <h1>Решение для Вашего комфорта</h1>
            <p>
              Новый Kia Seltos демонстрирует, как технологии помогают нам в
              жизни. Инженеры Kia сделали все, чтобы автомобиль вдохновлял вас
              на новые идеи и свершения, а также был надежным помощником в
              повседневных делах.
            </p>
            <hr className="mt-30" />
            <div className="mind-tx">
              <h4>Передние сиденья с вентиляцией и подогревом</h4>
              <p>Автоматический контроль температуры в салоне</p>
              <p>Беспроводная зарядка для мобильных устройств</p>
              <p>Светодиодные противотуманные фары</p>
              <p>Память настроек сидений\4</p>
            </div>
          </div>
          <div>
            <img className="seltosv" src="/en..jpeg" alt="" />
            <p className="kan">
              Наслаждайтесь комфортной поездкой независимо от того, какая погода
              за окном. Вы можете сами настроить нужный уровень вентиляции и
              подогрева передних сидений.
            </p>
          </div>
        </div>
      </div>
      <div className="block">
        <div className="car-inf car-inf-2">
          <div className="in-inf">
            <div>
              <h4 className="fuu">Искренне Ваш кроссовер</h4>
              <h1>Искренне Ваш кроссовер</h1>
            </div>
            <p>
              Спортивный и роскошный. Динамичный и комфортный. Мощный и
              маневренный. Отправляйтесь на новом Kia Seltos в поездку всей
              семьей, перевозите багаж в соответствии с вашими планами и идеями.
              Почувствуйте за рулем этого кроссовера драйв и вдохновение на
              дороге.
            </p>
          </div>
          <img className="sel-img" src="/original (1).jpg" alt="" />
        </div>
      </div>
      <div className="block">
        <div className="midl-tx midl-tx-2">
          <div>
            <p className="fuu">Безопасность</p>
            <h1>Технологии, которые защищают</h1>
            <p>
              Комплекс систем безопасности и помощи водителю Drive Wise
              использует новейшие технологии, которые помогают сохранять
              контроль и обеспечивают безопасность для водителя, пассажиров и
              пешеходов.
            </p>
            <hr className="mt-30" />
            <div className="mind-tx">
              <h5>
                Система предотвращения столкновения с автомобилем в слепой зоне
                (BCA)
              </h5>
              <p>
                Система предотвращения бокового столкновения при выезде с
                парковки задним ходом (RCCA)
              </p>
              <p>Датчики парковки (PDW)</p>
              <p>Ручной режим ограничения скорости (MSLA)</p>
            </div>
          </div>
          <div>
            <img className="seltosv" src="/80.webp" alt="" />
            <p className="ken">
              При включении поворотного сигнала BCA подает визуальные сигналы в
              случае обнаружения другого транспортного средства. При
              необходимости система задействует тормоза и рулевое управление.
            </p>
          </div>
        </div>
      </div>
      <div className="block">
        <div className="midl-tx midl-tx-5">
          <div>
            <p className="fuu">Двигатель</p>
            <h1>Устремленный в завтрашний день</h1>
            <p>
              Новый Kia Seltos обладает продуманным сочетанием качеств,
              необходимых для плавного движения. Кроссовер обеспечивает
              оптимальный баланс мощности и торможения. Автомобиль легко
              отзывается на команды водителя, готов к быстрой и комфортной езде.
              Какой бы ни была дорога, вы будете чувствовать себя за рулем Kia
              Seltos уверенно и спокойно.
            </p>
            <hr className="mt-30" />
            <div className="mind-tx">
              <h4>2.0 MPI</h4>
            </div>
          </div>
          <div>
            <div className="motor-inf">
              <h1>
                147 <span>л.с.</span>
              </h1>
              <p>Мощность двигателя</p>
            </div>
            <hr className="mt-30" />
            <div className="motor-inf">
              <h1>
                180 <span>Н·м</span>
              </h1>
              <p>Максимальный крутящий момент</p>
            </div>
            <hr className="mt-30" />
            <div className="motor-inf">
              <h1>
                9,6 <span>с</span>
              </h1>
              <p>
                Разгон от 0 до 100 км/ч (с минимальным значением для данного
                двигателя)
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="zeli">
        <div className="papy">
          <h5>Комплектации</h5>
          <h2>Варианты Новый Seltos</h2>
          <p>3 доступных комплектаций</p>
        </div>
        <div className="prym">
          <div className="tutu">
            <div className="pri">
              <h1>Style</h1>
              <h2> от 379 900 000</h2>
            </div>
            <div className="pupu">
              <h3>Двигатель и трансмиссия</h3>
              <h6>2,0 MPI / 147 л.с., Бензин</h6>
              <h2>Основные опции</h2>
              <p>
                Боковые зеркала заднего вида с электроприводом и подогревом
                Рейлинги на крыше Рулевое колесо и ручка селектора Трансмиссиии
                с отделкой кожей Камера заднего вида с динамическими линиями
                парковки Мультимедиа с 8" цветным дисплеем, с поддержкой Android
                Auto и Apple Carplay Фронтальные подушки безопасности
              </p>
              <hr className="ree" />
              <h1>Комплектации и цены </h1>
            </div>
          </div>
          <div className="tutu">
            <div className="pri">
              <h1>Style</h1>
              <h2> от 379 900 000</h2>
            </div>
            <div className="pupu">
              <h3>Двигатель и трансмиссия</h3>
              <h6>2,0 MPI / 147 л.с., Бензин</h6>
              <h2>Основные опции</h2>
              <p>
                Боковые зеркала заднего вида с электроприводом и подогревом
                Рейлинги на крыше Рулевое колесо и ручка селектора Трансмиссиии
                с отделкой кожей Камера заднего вида с динамическими линиями
                парковки Мультимедиа с 8" цветным дисплеем, с поддержкой Android
                Auto и Apple Carplay Фронтальные подушки безопасности
              </p>
              <hr className="ree" />
              <h1>Комплектации и цены</h1>
            </div>
          </div>
          <div className="tutu">
            <div className="pri">
              <h1>Style</h1>
              <h2> от 379 900 000</h2>
            </div>
            <div className="pupu">
              <h3>Двигатель и трансмиссия</h3>
              <h6>2,0 MPI / 147 л.с., Бензин</h6>
              <h2>Основные опции</h2>
              <p>
                Боковые зеркала заднего вида с электроприводом и подогревом
                Рейлинги на крыше Рулевое колесо и ручка селектора Трансмиссиии
                с отделкой кожей Камера заднего вида с динамическими линиями
                парковки Мультимедиа с 8" цветным дисплеем, с поддержкой Android
                Auto и Apple Carplay Фронтальные подушки безопасности
              </p>
              <hr className="ree" />
              <h1>Комплектации и цены</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="block">
        <div className="midl-tx midl-tx-2">
          <div>
            <p className="fuu">Обслуживание</p>
            <h1>Гарантия и сервис</h1>
            <p>
              Автомобили Kia произведены по самым высоким стандартам
              автомобильной промышленности. Именно это исключительное качество
              позволяет Kia предложить уникальные условия гарантии.
            </p>
          </div>
          <div>
            <img
              className="kili"
              src="https://cdn.kia-motors.uz/uz/uploads/sections/1137/original.png"
              alt=""
            />
          </div>
        </div>
      </div>
     <div className="teg">
          <img className="reg" src="/cici.png" alt="" />
     </div>
    </Layout>
  );
}
