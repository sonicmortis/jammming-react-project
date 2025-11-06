import React from 'react';
import './Playlist.css';
import TrackList from './TrackList';

function Playlist({PlaylistTracks, playlistName, onNameChange}) {
  const handleNameChange = (e) => {
    onNameChange(e.target.value);
  }

  return (
    <div className="Playlist">
      <input 
        className="Playlist-input"
        value={playlistName}
        onChange={handleNameChange}
      />
      <TrackList tracks={PlaylistTracks} />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;