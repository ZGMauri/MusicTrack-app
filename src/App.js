import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import ProfilePage from './Pages/ProfilePage';
import ListenedAlbum from './Pages/ListenedAlbum'
import ArtistListened from './Pages/ArtistListened'
import PendientAlbum from './Pages/PendientAlbum';
import PendientArtist from './Pages/PendientArtist';
import ArtisList from './Components/ArtistList';

function App() {

  return (
    <BrowserRouter>
    <div className="App bg-slate-800 w-full h-screen">
      <h1 className='text-white font-bold p-5 text-2xl'>TU APP DE SEGUIMIENTO MUSICAL!</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/Profile" element={<ProfilePage />}/>
        <Route path="/Listenedalbum" element={<ListenedAlbum />}/>
        <Route path="/Listenedartist" element={<ArtistListened />}/>
        <Route path="/Pendientartist" element={<PendientArtist />}/>
        <Route path="/Pendientalbum" element={<PendientAlbum />}/>
        <Route path="/h" element={<ArtisList />}/>

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
