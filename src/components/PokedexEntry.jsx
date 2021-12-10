import React from "react";

const PokedexEntry = (props) => {
  return (
    <div className='bg-white shadow-md rounded-md capitalize overflow-hidden max-w-xs my-3'>
      <div className="bg-gray-900 h-24"></div>
      <div className="py-2"><h1 className="text-2xl font-bold font-poppins">{props.name}</h1>
      <h5 className="font-poppins font-extralight">{props.id}</h5></div>     
    </div>
  );
};

export default PokedexEntry;
