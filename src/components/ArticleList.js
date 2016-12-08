import React, {Component, PropTypes} from 'react'
import Article from '../components/Article'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        deleteArticle: PropTypes.func.isRequired
    }

    render(){

        const { articles, deleteArticle } = this.props
        const items = articles.map((article) => <li key = {article.id}><Article {...{ deleteArticle, article }}/></li>)
        /*const {articles, deleteArticle} = this.props
        const items = articles.map((article) => {
            return (
                <li key = {article.id}> <Article {...{article, deleteArticle}}/> </li>
            )
        });*/
        return (
            <div>
                {items}
            </div>
        )
    }

}

export default ArticleList