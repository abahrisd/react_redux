import React, {Component, PropTypes} from 'react'

class Article extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired,
        deleteArticle: PropTypes.func.isRequired
    }

    render(){
        const {article, deleteArticle} = this.props
        return (
            <div>
                <h4>{article.title}</h4>
                <a href="#" onClick={this.deleteArticles}>delete article</a>
            </div>
        )
    }

    deleteArticles = (ev) => {
        ev.preventDefault();
        const {article, deleteArticle} = this.props
        deleteArticle(article.id)
    }

}

export default Article