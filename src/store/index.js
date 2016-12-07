import { createStore, compose } from 'redux'
import counter from '../reducer'
import logger from '../middlewares/logger'
import { applyMiddleware } from 'redux'
import DevTools from '../containers/DevTools'

const enhancer = compose(
    applyMiddleware(logger),
    DevTools.instrument()
)

const store = createStore(counter, {}, enhancer);

if (module.hot) {
    module.hot.accept('../reducer', () =>
        store.replaceReducer(require('../reducer').default)
    );
}
export default store
