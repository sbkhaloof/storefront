import React from "react";
import { Breadcrumbs, Link } from "@mui/material";
import { connect } from "react-redux";
import { active, reset } from '../store/categories'

const Categories = (props) => {
    console.log(props.ReduceCategory);
    // 1. Shows a list of all categories
    // 2. Dispatches an action when one is clicked to “activate” it
    return (
        <>
            <h2 style={{margin:'15px'}}>
                Browse our Categories
            </h2>
            <Breadcrumbs aria-label="breadcrumb" style={{position:'absolute',left:'20px'}}>
                {props.ReduceCategory.map(ele=>{
                    return(
                        <Link color="inherit" style={{textDecoration:'none'}} onClick={()=>props.active(ele.normalizedName)}>
                        {ele.normalizedName}
                      </Link>
                    )
                })}
                
            </Breadcrumbs>
        </>
    )
}

const mapStateToProps = state => ({
    ReduceCategory: state.ReduceCategory.categories
});

const mapDispatchToProps = { active, reset };


export default connect(mapStateToProps,mapDispatchToProps)(Categories);