import React from 'react';
//import artists from '../Components/Artist';
//import AddListenButton from '../Components/AddListenButton';

export default function PendientArtist(props) {
  const {pendiente} = props;
  console.log(pendiente);

  if (!pendiente) {
    return null;
  }

  const listenedItems = pendiente.map((a) => (
    <div key={a.name} className='border-2'>
      <li>
        <h2>{a.name}</h2>
        <p>Album: {a.album}</p>
        <p>Año: {a.year}</p>
      </li>
    </div>
  ));
  /*const [artistPend, serArtistPend] = useState(artists.filter(artist => artist.listen === false));
  const [artistListened, setArtistListened] = useState(artists.filter(artist => artist.listen === true));
  const [name, setName] = useState('');
  const [album, setAlbum] = useState('');
  const [year, setYear] = useState('');

  const addAlbum = () => {
    const newAlbum = { name, album, year, listen: true };
    serArtistPend([...artistPend, newAlbum]);
    setName('');
    setAlbum('');
    setYear('');
  };

  const addListen = (artist) => {
    const updatedPendList = artistPend.filter(a => a.name !== artist.name);
    const updatedListenedList = [...artistListened, artist];
    serArtistPend(updatedPendList);
    setArtistListened(updatedListenedList);
  };

  const artistPendient = artistPend.map((a) => (
    <div className='border-2'>
      <li key={a.name}>
        <h2>{a.name}</h2>
        <p>Album: {a.album}</p>
        <p>Año: {a.year}</p>
        <AddListenButton artist={a} onAddListen={addListen} />
      </li>
    </div>
  ));

  const artistListenedItems = artistListened.map((a) => (
    <div className='border-2'>
      <li key={a.name}>
        <h2>{a.name}</h2>
        <p>Album: {a.album}</p>
        <p>Año: {a.year}</p>
      </li>
    </div>
  ));*/

  return (
    <>
    <div className='container mx-auto p-10'>
      <h1 className='text-red-900 font-bold'>Artistas essssssscuchados</h1>
      <ul className='bg-green-500 grid grid-cols-4 gap-2 border-slate-800 border-2'>
        {listenedItems}
      </ul>
    </div>
      {/*<div className='container mx-auto p-10'>
        <h1 className='text-red-900 font-bold'>Artistas pendientes</h1>
        <ul className='bg-red-500 grid grid-cols-4 gap-2 border-slate-800 border-2'>{artistPendient}</ul>
      </div>
      <div>
        <h3 className='text-white text-2xl p-2'>Agregar artista</h3>
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

        <h1 className='text-green-900 font-bold'>Artistas escuchados</h1>
      <ul className='bg-green-500 grid grid-cols-4 gap-2 border-slate-800 border-2'>{artistListenedItems}</ul>

      </div>*/}
    </>
  );
}