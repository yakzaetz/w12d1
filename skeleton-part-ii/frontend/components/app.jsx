import React from 'react';
import { Route } from "react-router-dom";
import PokemonIndexContainer from './../components/pokemon/pokemon_index_container';

const App = () => (
    <Route path="/" component={PokemonIndexContainer} />
    // <Route path="/" component={PokemonIndexContainer} />
) 

export default App;