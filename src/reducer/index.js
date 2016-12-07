import articlesReducer from './articles'
import counterReducer from './counter'

export default (state, action) => {
    return {
        articles: articlesReducer(state.articles, action),
        counter: counterReducer(state.counter, action)
    }
}