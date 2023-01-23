import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import VoiceCommand from "./hoc/voiceCommand/VoiceCommand";
import { Switch, Route } from "react-router-dom";
import GenresList from "./components/genresList/GenresList";
import MovieList from "./components/moviesList/MovieList";

function App() {
  return (
    <VoiceCommand>
      <Switch>
        <Route path="/genres-list" component={GenresList} />
        <Route path="/" exact component={Home} />
        <Route path="/:id" component={MovieList} />
      </Switch>
     </VoiceCommand>
  );
}

export default App;
