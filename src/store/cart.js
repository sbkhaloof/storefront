// State should be an array of products that have been added (all product details)
let initialState = {
    cart:[ ],
    count:0,
    view:false
}

// Create a reducer that adds the product to the array of items in state
function ReduceCart(state=initialState,action){
    let{type,payload}=action;
    switch(type){
        case 'ADD-TO-CART':
            let cartData=[...state.cart,payload]
            return {cart:cartData,count:state.count+1,view:state.view}
         
        case 'DELETE-FROM-CART':
            let cartDataAfter=state.cart.filter((item,index)=>index!=payload.index)
                return{cart:cartDataAfter,count:state.count-1,view:state.view}
        
        case 'VIEW-CART':
            return{cart:state.cart,count:state.count,view:payload}        
        default:
            return state;        
    }
}

// Create an action that will trigger the reducer to add the selected item to the cart
//Hint: this could be the same action type as you create for the Products reducer

export const addToCart=(item)=>{
    return{
        type:'ADD-TO-CART',
        payload:item
    }
}
export const deleteFromCart=(item,index)=>{
    return{
        type:'DELETE-FROM-CART',
        payload: {
            product:item,
            index:index
          },
    }
}
export const viewCart=(item)=>{
    return{
        type:'VIEW-CART',
        payload:item
    }
}

export default ReduceCart;

