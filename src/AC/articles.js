import { DELETE_ARTICLE, OPEN } from '../constants'

export function deleteArticle(id){
    return {
        type: DELETE_ARTICLE,
        data: {id}
    }
}

export function openArticle(){
    return {
        type: OPEN
    }
}