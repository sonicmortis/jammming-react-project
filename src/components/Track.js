import React from 'react';
import './Track.css';

function Track({Track}) {
  return (
    <div className="Track">
      <div className="Track-information">
        <h3 className="Track-name">{Track.name}</h3>
        <p className="Track-artist-album">{track.artist} • {track.album}</p>
      </div>
      <button className="Track-action">+</button>
    </div>
  );
}

export default Track;