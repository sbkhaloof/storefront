import React from "react"
import { Link } from "@mui/material";

//lab 37
import { connect } from "react-redux";
import { viewCart } from "../store/cart";

 function Header(props) {
  return (
    // <div>
    <header style={{ backgroundColor: 'khaki', widows: 'initial', height: '75px' }}>
      <h2 style={{ color: 'black', textAlign: 'justify', marginLeft: '10px', marginBottom: '10px', padding: '20px' }}> OUR STORE
      <Link color="inherit"style={{position:"absolute", right:"20px",textDecoration:'none'}} onClick={()=>{props.viewCart(!props.cart.view)}}>
        CART ({props.cart.count})
      </Link>
      </h2>
      
    </header>
    // </div>
  )
}
const mapStateToprops = (state) => {
  return { cart: state.ReduceCart };
};
const mapDispatchToProps = { viewCart };
export default connect(mapStateToprops,mapDispatchToProps)(Header);