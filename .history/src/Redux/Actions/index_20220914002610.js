import { type } from "@testing-library/user-event/dist/type"

export const addItem = (product)=>{
    return{
        type: 'Additem',
        payload: product 
    }
}
export const delItem = (product) =>{
    return{
        type: 'Delitem',
        payload: product 
    }

}