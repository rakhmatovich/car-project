import React from "react";

const news = [
  {id: 1, text: 'Беспроцентная рассрочка действует до 30 ноября', url:'/sportage.jpg'},
  {id: 2, text: 'Беспроцентная рассрочка на автомобили Kia Seltos и Kia K5', url:'/k5.jpg'},
  {id: 3, text: 'Выгодные условия кредитования от Kia Uzbekistan', url:'/seltos.jpg'},
  {id: 4, text: 'Выгодные условия кредитования от Kia Uzbekistan', url:'/stinger.jpg'},
]

export const Chelss = () => {
  return (
    <div className="chelss">
      <div className="chelss-h">
        <h3>Специальные предложения</h3>
      </div>
      <div className="main-p">

        {news.map(item => (
          <div className="chelss-item" key={item.id}>
            <img src={item.url} alt={item.text} />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <div className="chells-end">
         <button className="chells-b">Все спецпредложения</button>
      </div>
    </div>
  );
};
