'use client'
import React from 'react'
import { useState } from 'react';
type Props = {}

const Menu = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-10  bg-gray-400 ">
    <button
      onClick={handleToggleMenu}
      className="py-2 px-4 bg-orange-400 "
    >
      Выберите направление обучения
    </button>

    {isOpen && (
      <div className="absolute right-0 mt-2 bg-blue rounded-md shadow-md">
        <ul className="py-2">
          <li className="px-4 py-2 hover:bg-red-200">
            <a href="#" className="text-red-500">
              Направление 1
            </a>
          </li>
          <li className="px-4 py-2 hover:bg-red-200">
            <a href="#" className="text-red-500">
              Направление 2
            </a>
          </li>
          <li className="px-4 py-2 hover:bg-red-200">
            <a href="#" className="text-red-500">
              Направление 3
            </a>
          </li>
        </ul>
        <div className="px-4 py-2 bg-red-500 text-white rounded-b-md">
          <a href="https://example.com">Официальный сайт</a>
          <span className="text-xs ml-1">(Подробности)</span>
        </div>
      </div>
    )}
  </div>
);
};
export default Menu;