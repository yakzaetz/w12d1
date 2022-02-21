import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './../components/pokemon/pokemon_index_container';
import { HashRouter } from "react-router-dom";



const Root = ({store}) => (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
)

export default Root;