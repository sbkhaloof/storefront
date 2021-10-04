/*
Add a new component to the page: <SimpleCart />
Displays a short list (title only) of products in the cart
This should be present at all times
*/

import React from 'react';
import { connect } from "react-redux";
import {deleteFromCart} from '../store/cart'

function SimpleCart(props) {
    return (
        <ul style={{marginLeft:'1500px'}}>
            {props.cart.view && props.cart.cart.map((ele, index) => {
                return (
                    <li key={index} >

                        <span onClick={()=>{props.deleteFromCart(ele, index)}} style={{marginRight:'10px'}}>❌</span>
                        <span>{ele.name}</span>
                        
                    </li>
                )

            })}

        </ul>
    )
}

const mapStateToprops = (state) => {
    return { cart: state.ReduceCart };
};
const mapDispatchToProps={deleteFromCart}

export default connect(mapStateToprops,mapDispatchToProps)(SimpleCart);

