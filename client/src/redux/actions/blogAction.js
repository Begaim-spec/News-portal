import axiosV1 from '../../services/api'
import axios from "axios";


export const getNews = () => {
    return (dispatch) => {
        dispatch({type: "BLOG_REQUEST"})
        axiosV1('http://localhost:8000/api/v1/news')
            .then(({data}) => {
                dispatch({type: 'BLOG_SUCCESS', payload: data})
            })
            .catch((error) => dispatch({type: 'BLOG_FAILED', payload: error}))
    }
}

