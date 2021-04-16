
const reducer=(state,action)=>{
    
    if(action.type==='ITEM_FETCH'){
      return {...state,loading:false,cart:action.payload}

    }
    if(action.type==='CLEAR_CART'){
        return {...state,cart:[]}
    }
    if(action.type==='REMOVE_ITEM'){
        const newItems=state.cart.filter(item=>item.id!==action.payload)
        return {...state,cart:newItems}
    }
    if(action.type==='INCREASE_ITEM'){
        
        const newItems=state.cart.map(item=>{
            if(item.id===action.payload){
                return {...item,amount:item.amount+1}
            }
            return item
        })
        return {...state,cart:newItems}        

    }
    if(action.type==='DECREASE_ITEM'){
        
        const newItems=state.cart.map(item=>{
            if(item.id===action.payload){
                return {...item,amount:item.amount-1}
            }
            return item
        }).filter(item=>item.amount>0)
        return {...state,cart:newItems}   
    }


    return state
}

export default reducer