import {articles as defaultArticles} from '../fixtures'
import { DELETE_ARTICLE, OPEN } from '../constants'

export default (articles = defaultArticles, action) => {
    const {type, data} = action

    switch(type){
        case DELETE_ARTICLE: return articles.filter((article) => article.id != data.id)
    }

    return articles
}
