import React from 'react';

export default function AddListenButton({ artist, onAddListen }) {
  const handleClick = () => {
    onAddListen(artist);
  };

  return (
    <button onClick={handleClick} className='text-white font-bold bg-gradient-to-r from-green-600 to-green-800 rounded text-sm m-3 border-x-2 border-y-2'>
      Agregar a escuchados
    </button>
  );
}
