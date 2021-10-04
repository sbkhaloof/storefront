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
            price: '5 JD',
            inventoryCount: 3,
            imeage: 'https://t3.ftcdn.net/jpg/01/17/33/90/240_F_117339013_fHGrRBhHtlgsPDZVAIk2yLr2d1D1GGxl.jpg'
        }, {
            category: 'FOOD',
            name: 'mansf',
            description: 'ALL YOU WANT HERE',
            price: '10 JD',
            inventoryCount: 5,
            imeage: 'https://t4.ftcdn.net/jpg/02/65/52/23/240_F_265522357_JCF8WVgnNg1y6ClBDtqp4yUXTrZnTGuc.jpg',
        }, {

            category: 'ELECTRONICS',
            name: 'TV',
            description: 'ALL YOU WANT HERE',
            price: '300 JD',
            inventoryCount: 3,
            imeage: 'https://t3.ftcdn.net/jpg/00/68/26/34/240_F_68263422_zf3uvYygwl2LFH0N0Q44u6NGPYIJtudj.jpg'
        },
        {

            category: 'ELECTRONICS',
            name: 'Treadmill',
            description: 'ALL YOU WANT HERE',
            price: '500 JD',
            inventoryCount: 3,
            imeage: 'https://t4.ftcdn.net/jpg/02/42/31/29/240_F_242312925_Fusk8H1LST3rcp3VSLTrviSGMKQiN49S.jpg'
        }

    ],
    activeProduct: []
}
//lab 37


/*
1. Create a reducer that will filter the products list based on the active category
2. Create a reducer that reduces the # in stock when that action is dispatched
*/

const ReduceProducts = (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case 'ACTIVE':

            state.activeProduct = state.products.filter(product => {

                return product.category == payload ? product.category : null;
            })
            return state;
        case 'STOCKCOUNTER':

            state.activeProduct = state.activeProduct.map((product) => {
                if (product.name === payload.name) {
                    if (product.inventoryCount > 0) {
                        product.inventoryCount = product.inventoryCount - 1;
                    }
                    return product;
                }
                return product;
            });
            return { ...state };
        // this case to update inventory count aftter delete product from cart
        case 'DELETE-FROM-CART':
            state.activeProduct = state.activeProduct.map((product) => {
                if (product.name === payload.product.name) {
                    product.inventoryCount = product.inventoryCount + 1;

                    return product;
                }
                return product;
            });
            return { ...state };
        default:
            return state;
    };
}
// for the action 
/*
1. Create an action that will trigger the reducer to filter the product list when the active category is changed
HINT: Different reducers can respond to the same actions
2. Create an action that will trigger the reducer to reduce the stock counter
*/
export const active = (name) => {
    return {
        type: 'ACTIVE',
        payload: name
    }
}

export const stockCounter = (name) => {
    return {
        type: 'STOCKCOUNTER',
        payload: name
    }
}

export default ReduceProducts;