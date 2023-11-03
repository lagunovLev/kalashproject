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
    <div className="absolute z-50 bg-white">
    <button
      onClick={handleToggleMenu}
      className="py-2 px-4 bg-orange-400 rounded-lg"
    >
      Выберите направление обучения
    </button>

    {isOpen && (
      <div className="absolute right-0 mt-2 bg-white rounded-md shadow-md">

            <div className="z-50 bg-gray-400 p-10 m-10 rounded-lg">
              <a href="#" className="">
                Направление 1
              </a>
            </div>

            <div className="z-50 bg-gray-400 p-10 m-10 rounded-lg">
              <a href="#" className="">
                Направление 2
              </a>
            </div>

            <div className="z-50 bg-gray-400 p-2 rounded-lg">
              <a href="#" className="">
                Направление 3
              </a>
            </div>

        <div className="px-4 py-2 text-white rounded-b-md">
          <a href="https://example.com">Официальный сайт</a>
          <span className="text-xs ml-1">(Подробности)</span>
        </div>
      </div>
    )}
  </div>
);
};
export default Menu;