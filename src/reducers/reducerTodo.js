const initialState = {
    list: []
};

const todoList = (state = initialState, action) => {
    switch(action.type){
        case "ADDTODO" : 
            const {id, data} = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id:id,
                        data: data
                    }
                ]
            }
            
        case "DELETETODO" : 
            const newList = state.list.filter((elem) => elem.id !== action.id);
            return {
                ...state,
                list: newList
            }
        
        case "REMOVETODO" : return {
            ...state,
            list: []
        }
        
        
        default : return state;
    }
}

export default todoList;