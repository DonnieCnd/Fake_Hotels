import { ADD_TO_CART,REMOVE_HOTEL,SUB_NIGHT,ADD_NIGHT,ADD_INSURANCE } from '../actions/action-types/cart-actions'


const initState = {
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
   
    if(action.type === ADD_TO_CART){
        let addedItem = action.id;

        let existed_item= state.addedItems.find(item=> action.id.id === item.id)
        if(existed_item)
        {
            existed_item.quantity += 1 
            state.total=0;
            state.addedItems.forEach(element => {
                state.total+=(element.price*element.quantity);
            });

                return{
                ...state,
                    total: state.total
                    }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            state.addedItems.push(addedItem);
            state.total=0;
            state.addedItems.forEach(element => {
                state.total+=(element.price*element.quantity);
            });
            
            return{
                ...state,
                total : state.total
            }
            
        }
    }
    if(action.type === REMOVE_HOTEL){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_NIGHT){
        let addedItem = state.addedItems.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_NIGHT){  
        let addedItem = state.addedItems.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type=== ADD_INSURANCE){
          return{
              ...state,
              total: state.total + 50
          }
    }

    if(action.type=== 'SUB_INSURANCE'){
        return{
            ...state,
            total: state.total - 50
        }
  }
    
  else{
    return state
    }
    
}

export default cartReducer
