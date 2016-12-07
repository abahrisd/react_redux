import { createStore } from 'redux'
import counter from '../reducer/counter'

const store = createStore(counter);

export default store
