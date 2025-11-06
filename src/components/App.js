import React, {useState} from 'react';
import './App.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';

function App() {
  const [searchResults, setSearchResults] = useState(hardcodedTracks);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');
    
  const hardcodedTracks = [
  {
    id: 1,
    name: "Song One",
    artist: "Artist A", 
    album: "Album X"
  },
  {
    id: 2,
    name: "Song Two",
    artist: "Artist B",
    album: "Album Y"
  },
  {
    id: 3,
    name: "Song Three", 
    artist: "Artist C",
    album: "Album Z"
  }
  ];

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  }

    const addTrackToPlaylist = (track) => {
    const isTrackInPlaylist = playlistTracks.some(playlistTrack => 
      playlistTrack.id === track.id
    );
    
    if (!isTrackInPlaylist) {
      setPlaylistTracks(prevTracks => [...prevTracks, track]);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <p className="App-subtitle">Create and save playlists to your Spotify account</p>
      </header>
      <div className="App-body">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults 
          searchResults={searchResults}
          onAddTrack={addTrackToPlaylist} />
          <Playlist 
            playlistTracks={playlistTracks}
            playlistName={playlistName}
            onNameChange={updatePlaylistName} />
        </div>
      </div>
    </div>
  );
}

export default App;