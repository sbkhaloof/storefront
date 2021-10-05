import React from "react";
// Displays a list of products associated with the selected category
// https://github.com/mui-org/material-ui/blob/v5.0.1/docs/src/pages/components/cards/ImgMediaCard.js

// these for card
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {stockCounter, getProduct,actualGet} from '../store/products';
import {addToCart} from '../store/cart'
import { connect ,useDispatch} from "react-redux";
import { useEffect } from 'react'




const Products = (props) => {
  console.log(props.products,'>...............');

  const dispatch = useDispatch();
  useEffect(() => {
    props.actualGet(dispatch(getProduct()))
    console.log('inside use effect');
  }, [props.products])
  return (
    <>
      {props.products.map(ele => {
       
          return (
            <div key={ele.name}>
            <Card  sx={{ maxWidth: 345 }} style={{ position:'relative', left:"650px",display:'flex',flexDirection:'column' }}>
              <CardMedia
                component="img"
                // height="140"
                image={ele.imeage}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {ele.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {ele.description}
                  <br/>
                  PRICE : {ele.price}
                  <br />
                  INVENTORY : {ele.inventoryCount}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small"> View</Button>
                <Button size="small" 
                onClick={() => {
                  if (ele.inventoryCount) {
                    props.addToCart(ele)
                    props.stockCounter(ele)
                    } else {
                    alert("empty item");
                  }
                }}>  Add to Cart</Button>
              </CardActions>
            </Card>
            </div>
          )
        }
      )}
<br/>
    </>

  )
}
const mapStateToProps = (state) => ({
  products: state.ReduceProducts.activeProduct,
  activeCategory: state.ReduceCategory.activeCategory
})
const mapDispatchToProps = {stockCounter,addToCart,actualGet}
export default connect(mapStateToProps,mapDispatchToProps)(Products);