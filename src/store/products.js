/*
State should be a list of all products
Each product should have a category association, name, description, price, inventory count
*/

let initialState = {
    products: [
        {
            category: 'FOOD',
            name: 'shawerma',
            description: 'ALL YOU WANT HERE',
            price:'5 JD',
            inventoryCount:3,
            imeage:'https://t3.ftcdn.net/jpg/01/17/33/90/240_F_117339013_fHGrRBhHtlgsPDZVAIk2yLr2d1D1GGxl.jpg'
        }, {
            category: 'FOOD',
            name: 'mansf',
            description: 'ALL YOU WANT HERE',
            price:'10 JD',
            inventoryCount:5,
            imeage:'https://t4.ftcdn.net/jpg/02/65/52/23/240_F_265522357_JCF8WVgnNg1y6ClBDtqp4yUXTrZnTGuc.jpg',
        },{
           
            category: 'ELECTRONICS',
            name: 'TV',
            description: 'ALL YOU WANT HERE',
            price:'300 JD',
            inventoryCount:3,
            imeage:'https://t3.ftcdn.net/jpg/00/68/26/34/240_F_68263422_zf3uvYygwl2LFH0N0Q44u6NGPYIJtudj.jpg' 
        },
        {
            
            category: 'ELECTRONICS',
            name: 'Treadmill',
            description: 'ALL YOU WANT HERE',
            price:'500 JD',
            inventoryCount:3,
            imeage:'https://t4.ftcdn.net/jpg/02/42/31/29/240_F_242312925_Fusk8H1LST3rcp3VSLTrviSGMKQiN49S.jpg'
        }
        
    ]
}

// here will add the reducer
// a reducer will take the old state and return the new state
// also a reducer will an action as a second paramter.

// we pass as default state value the initialState, this will be used
// the first time we run the app, since the state will be undefined.

const ReduceProducts=(state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case 'ACTIVE':
            
            let product = state.products.filter(product => {
               
                return product.category==payload?product.category:null;
            })
            return { ...state,product };
        case 'RESET':
            return initialState;
        default:
            return state;
    };
}
// for the action 
/*
Create an action that will trigger when the active category is changed
HINT: Multiple reducers can respond to the same actions
*/
export default ReduceProducts;