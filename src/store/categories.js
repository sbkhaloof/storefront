/*
State should contain a list of categories as well as the active category
Each category should have a normalized name, display name, and a description
*/


let initialState = {
    categories: [
        {
            normalizedName: 'FOOD',
            displayName: 'FOOD',
            description: 'ALL YOU WANT HERE',
        }, {
            normalizedName: 'ELECTRONICS',
            displayName: 'ELECTRONICS',
            description: 'ALL YOU WANT HERE',
        }
    ]
}

// here will add the reducer
// a reducer will take the old state and return the new state
// also a reducer will an action as a second paramter.

// we pass as default state value the initialState, this will be used
// the first time we run the app, since the state will be undefined.

const ReduceCategory=(state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case 'ACTIVE':
            let activeCategory = payload
            let categories = state.categories.map(item => {
                if (item.normalizedName === payload) {
                    return {
                        normalizedName: item.normalizedName,
                        displayName: item.displayName,
                        description: item.description
                    }
                }
                return item;
            })
            return { activeCategory, categories };
        case 'RESET':
            return initialState;
        default:
            return state;
    };
}
// create actions

export const active = (name) => {
    return {
        type: 'ACTIVE',
        payload: name
    }
}

export const reset = () => {
    return {
        type: 'RESET',
    }
}
export default ReduceCategory;