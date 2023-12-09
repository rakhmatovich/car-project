import React from "react";
import Layout from "../components/Layout";
import DealerItem from "../components/DealerItem";

const locations = [
  {
    id: 1,
    name: "Kia Yakkasaroy",
    description: `
    Наш адрес: 100163, г. Ташкент, Яккасарайский район, ул. КИЧИК ХАЛКА ЙУЛИ (МАЛАЯ КОЛЬЦЕВАЯ), 70А График работы: пн. - вс.: 9:00 - 21:00 Телефон: 1333`,
  },
  {
    id: 2,
    name: "Kia Sergeli",
    description: `
    Наш адрес: 
    Наш адрес: 111503, г. Ташкент, Сергелийский район, массив А.Навоий, Ташкентская Кольцевая Автомобильная Дорога. Ориентир: Напротив автосалона Drivers Village. График работы: пн. - вс.: 9:00 - 21:00 Телефон: 1333`,
  },
  {
    id: 3,
    name: "Kia Denov",
    description: `
    Наш адрес: 
    Наш адрес: 190100, Денауский район, махалла "Лочин", улица Хумо. График работы: пн. - вс.: 9:00 - 19:00     Телефон: 1333`,
  },
  {
    id: 4,
    name: "Kia Bukhara",
    description: `
    Наш адрес: 
    Наш адрес: 200100, г. Бухара, A380, трасса Газли     График работы: пн. - вс.: 9:00 - 19:00 Телефон: 1333`,
  },
  {
    id: 5,
    name: "Kia Andijan",
    description: `
    Наш адрес: 
    Наш адрес: 171003, г. Андижан, Жалабек КФЙ, массив С. Ашуров.     График работы: пн. - вс.: 9:00 - 20:00 Телефон: 1333`,
  },
  {
    id: 6,
    name: "Kia Kokand",
    description: `
    Наш адрес: 
    Наш адрес: 180100 г. Коканд, ул. Моварауннахр, дом 94г    График работы: пн. - вс.: 09:00 - 20:00     Телефон: 1333`,
  },
];


export default function Dealers() {
  return (
    <Layout>
      <div className="container">
        <div className="dealer">
            <h1 className="dealer-title">Официальные дилеры Kia</h1>
            {locations.map(location => (
                <DealerItem 
                    key={location.id}
                    name={location.name}
                    description={location.description}
                />
            ))}
        </div>
      </div>
    </Layout>
  );
}
