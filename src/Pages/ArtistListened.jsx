import React, { useState } from 'react'
import artists from '../Components/Artist';


export default function ArtistListened() {
  const [artistList, setArtistList] = useState(artists.filter(artist => artist.listen === true));
  const [name, setName] = useState('');
  const [album, setAlbum] = useState('');
  const [year, setYear] = useState('');

  const addArtist = () => {
    // Crea un nuevo artista con los valores de los estados de nombre, album y año.
    const newArtist = { name, album, year, listen: true };
    // Agrega el nuevo artista a la lista de artistas.
    setArtistList([...artistList, newArtist]);
    // Limpia los estados de nombre, album y año.
    setName('');
    setAlbum('');
    setYear('');
  }

  const artistListen = artistList.map((a) => (
    <div className='border-2'>
      <li key={a.name}>
        <h2>{a.name}</h2>
        <p>Álbum: {a.album}</p>
        <p>Año: {a.year}</p>
      </li>
    </div>
  ));


  return (
    <>
    <div className='container mx-auto p-10'>
      <h1 className='text-red-900 font-bold'>Artistas escuchados:</h1>
      <ul className='bg-red-500 grid grid-cols-4 gap-2 border-slate-800 border-2'>{artistListen}</ul>
    </div>
    <div>
      <h3 className='text-2xl text-green-900'>Agregar artista</h3>
      <label className='block text-sm font-bold leading-6 text-gray-900'>
            Name:
            <input value={name}
            onChange={e => setName(e.target.value)}
            type='text' 
            className="mt-2 mx-auto block w-1/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
            focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
      </label>
      <label className='block text-sm font-bold leading-6 text-gray-900'>
            Album:
            <input value={album}
            onChange={e => setAlbum(e.target.value)}
            type='text'
            className="mt-2 mx-auto block w-1/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
            focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
      </label>
      <label className='block text-sm font-bold leading-6 text-gray-900'>
            Año:
            <input value={year}
            onChange={e => setYear(e.target.value)}
            type='number' 
            className="mt-2 mx-auto block w-1/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
            focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
      </label>
      <button onClick={addArtist} className='bg-gradient-to-r from-cyan-800 to-cyan-600 text-white 
      px-4 py-2 rounded shadow-md focus:ring hover:bg-cyan-400 transition-all 
      active:transform active:translate-y-1'>Agregar</button>
    </div>
    </>
  )
}