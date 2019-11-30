import { SET_BOOKS } from '../actions/books';

const initState = [];

export const booksReducer = (books = initState, action) =>{

    console.log("====**************========");
    
    console.log(action.payload);
    
    const { payload } = { action };
    
    switch (action.type) {
    
        case SET_BOOKS:    
        console.log(payload);
                
            return action.payload;

        default:
           return books;
    }

}