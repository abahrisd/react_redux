import { createStore } from 'redux'
import {INCREMENT} from '../constants'

function reducer(state = 0, action){
    const {type, data} = action;
    return type === INCREMENT ? state +1 : state;

}

const store = createStore(reducer);

export default store

window.store = store