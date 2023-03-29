import React, { useState } from 'react';
import artists from '../Components/Artist';

export default function ListenedAlbum() {
  const [albumList, setAlbumList] = useState(artists.filter(artist => artist.listen === true));
  const [name, setName] = useState('');
  const [album, setAlbum] = useState('');
  const [year, setYear] = useState('');

  const addAlbum = () => {
    const newAlbum = { name, album, year, listen: true };
    setAlbumList([...albumList, newAlbum]);
    setName('');
    setAlbum('');
    setYear('');
  };

  const albumListen = albumList.map((a) => (
    <div className='border-2'>
      <li key={a.name}>
        <h2>{a.album}</h2>
        <p>Artista: {a.name}</p>
        <p>Año: {a.year}</p>
      </li>
    </div>
  ));

  return (
    <>
      <div className='container mx-auto p-10'>
        <h1 className='text-red-900 font-bold'>Albums escuchados</h1>
        <ul className='bg-red-500 grid grid-cols-4 gap-2 border-slate-800 border-2'>{albumListen}</ul>
      </div>
      <div>
        <h3 className='text-white text-2xl p-2'>Agregar album</h3>
        <label className='block text-sm font-bold leading-6 text-white'>
          Artista:
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type='text'
            className="mt-2 mx-auto block w-1/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
            focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </label>
        <label className='block text-sm font-bold leading-6 text-white'>
          Álbum:
          <input
            value={album}
            onChange={(e) => setAlbum(e.target.value)}
            type='text'
            className="mt-2 mx-auto block w-1/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
            focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </label>
        <label className='block text-sm font-bold leading-6 text-white'>
          Año:
          <input
            value={year}
            onChange={(e) => setYear(e.target.value)}
            type='number'
            className="mt-2 mx-auto block w-1/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
            focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </label>
        <button onClick={addAlbum} className='bg-gradient-to-r from-cyan-800 to-cyan-600 text-white 
        px-4 py-2 rounded shadow-md focus:ring hover:bg-cyan-400 transition-all 
        active:transform active:translate-y-1'>
          Agregar
        </button>
      </div>
    </>
  );
}