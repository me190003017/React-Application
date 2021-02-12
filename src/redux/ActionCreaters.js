import * as ActionTypes from './ActionTypes';

export const addComment = (dishId,rating ,author,comment)=>({
    // it is going to return a javascript object which is action object
    type:ActionTypes.ADD_COMMENT,
    payload:{
        dishId:dishId,
        rating:rating,
        author:author,
        comment:comment
    }
    
})