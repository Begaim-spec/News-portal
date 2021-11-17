const initialState = {
    news: [],
    isLoading: false,
    error: ''
}
export const blogReducer = (state = initialState, action) => {
    switch(action.type){
        case 'BLOG_REQUEST':
            return {...state, isLoading: true}
        case 'BLOG_SUCCESS':
            return {...state, isLoading: false, news: action.payload}
        case 'BLOG_FAILED' :
            return  {...state, isLoading: false, error: action.payload}
        default:
            return state
    }
}