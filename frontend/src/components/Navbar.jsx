import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-left">
        <Link to="/models">Модели</Link>
        <Link to="/pokupka">Выбор и покупки</Link>
        <Link to="/vlad">Владельцам</Link>
      </div>

      <Link to="/">
        <img className="nav-logo" src="/logo.jpg" alt="logo" />
      </Link>

      <div className="nav-right">
        <Link to="/dileri">Дилеры</Link>
        <Link to="/test-drive">Запись на тест драйв</Link>
        <Link to="/mir">Мир Kia</Link>
      </div>
    </div>
  );
};
