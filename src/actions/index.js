import axios from "axios";
import _ from 'lodash'

export const fetchPostsAndUsers = ()=> async (dispatch, getState) => {

     await dispatch(fetchPost)
     const userIds = _.uniq(_.map(getState().posts, 'userId'))
     userIds.forEach(id => dispatch(fetchUser(id)))
    }

export const fetchPost = ()=>{
    return (dispatch) => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            dispatch({type: 'FETCH_POSTS', payload: response.data})
        })
    }
}

export const fetchUser = (id)=>{
    return (dispatch) => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => {
            dispatch({type: 'FETCH_USER', payload: response.data})
        })
    }
}