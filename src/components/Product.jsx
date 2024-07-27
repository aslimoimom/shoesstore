// src/components/Product.jsx

import React from "react";

export default function Product({ data }) {
  return (
    <div className="border-2 border-black rounded-xl w-80 h-80 p-4 flex flex-col items-center">
      <img className="w-full h-2/3 object-cover" src={data.img} alt="" />
      <div className="w-full text-center mt-2">
        <h1 className="text-lg font-semibold">{data.name}</h1>
        <p className="text-md">{data.price}</p>
      </div>
    </div>
  );
}
