import axios from "axios";

export const getPost = (id) => {
    return(dispatch) => {
        dispatch({type: 'POST_REQUEST'})
        axios(`http://localhost:8000/api/v1/news/${id}`)
            .then(({data}) => {
                dispatch({type: 'POST_SUCCESS', payload: data})
            }).catch((error) => {
                dispatch({type: 'POST_FAILED', payload: error})
        })
    }
}





export const addComment = (value, userId, newsId ) => {
    return (dispatch) => {
        axios.post('http://localhost:8000/api/v1/comments', {...value, news: newsId, user: userId})
            .then(({data}) => {
               dispatch({type: 'COMMENT_SUCCESS', payload: data})
           //  }) .catch((e) => {
           // dispatch({type:})
        })
    }
}