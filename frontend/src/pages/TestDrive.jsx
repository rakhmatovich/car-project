import React from "react";
import Layout from "../components/Layout";

export default function TestDrive() {
  return (
    <Layout>
      <div className="veve">
        <div className="bebe">
          <h2>Запись на тест-драйв</h2>
          <h3>Бизнес-класс и представительский класс</h3>
          <img src="https://cdn.kia-motors.uz/drive/978.png" alt="" />
          <p>K5</p>
        </div>
        <div className="cece">
          <h3>Кроссоверы и внедорожники</h3>
          <div className="rot">
            <div className="lee">
              <img src="https://cdn.kia-motors.uz/drive/1576.png" alt="" />
              <p>Sportage</p>
            </div>
            <div className="loo">
              <img src="https://cdn.kia-motors.uz/drive/1114.png" alt="" />

              <p>Sorento</p>
            </div>
            <div className="laa">
              <img src="https://cdn.kia-motors.uz/drive/1857.png" alt="" />
              <p>Новый Seltos</p>
            </div>
          </div>
        </div>

        <div className="gege">
          <h3>Компактные</h3>
          <img src="https://cdn.kia-motors.uz/drive/1643.png" alt="" />
          <p>Cerato</p>
        </div>
      </div>
      
    </Layout>
  );
}
