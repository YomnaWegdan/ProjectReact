const addItem = [];
const addItems = (state = addItem , action) =>{

    switch(action.type){
        case 'ADDITEM': return[
            ...state,
            action.payload
        ]
        break;
        case 'DELITEM':return 
        ]
        break;
        default 
    }
}