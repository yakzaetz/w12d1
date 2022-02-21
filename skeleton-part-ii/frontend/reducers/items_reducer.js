import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from './../actions/pokemon_actions';

const itemsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_POKEMON:
            // return action.pokemon.items
        case RECEIVE_POKEMON:
            // let items = action.pokemon.items;
            // items.map(item => {
            //     nextState[item.id] = item
            // })
            // nextState[items][items.id] = action.pokemon.items;
            return nextState;
        default:
            return state;
    }
}

export default itemsReducer