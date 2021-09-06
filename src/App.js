import React, {useState} from "react";
//Adding components
import Player from "./components/Player";
import Song from "./components/Song";
//Import styles
import './styles/app.scss';
import data from './util'
import Library from "./components/Library";

function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player 
      setIsPlaying={setIsPlaying}
      isPlaying={isPlaying}
      currentSong={currentSong}/>
    <Library songs={songs}/>
    </div>
  );
}

export default App;
