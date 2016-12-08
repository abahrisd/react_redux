import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import ArticleList from '../components/ArticleList'
import {deleteArticle} from '../AC/articles'

class ArticleListContainer extends Component {

    static propTypes = {

    }

    render(){
        return (
            <div>
                <h1>Article list</h1>
                <ArticleList {...this.props}/>
            </div>
        )
    }

}

//get data from store, dispatch and subcribe
//in second argument - action creators
export default connect((state) => {
    const {articles} = state;
    return {articles}
}, {deleteArticle})(ArticleListContainer)