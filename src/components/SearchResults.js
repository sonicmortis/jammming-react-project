import React from 'react';
import './SearchResults.css';
import TrackList from './TrackList';

function SearchResults() {
  return (
    <div className="SearchResults">
      <h2 className="SearchResults-title">Results</h2>
      <TrackList tracks={SearchResults} />
    </div>
  );
}

export default SearchResults;