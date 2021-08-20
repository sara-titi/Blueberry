import React from "react";
import { Link } from "react-router-dom";
import "./CartIcon.css";

import { connect } from "react-redux";

 function CartIcon(props){
    return <div id="cart-icon">
        <Link to="/cart">
            <i className="fa fa-shopping-cart"></i>
            <span className="badge badge-danger">{props.totalQuantity}</span>
        </Link>
    </div>
}
const mapStateToProps= (state) =>{
    return{
        totalQuantity : state.cart.reduce((sum , item)=>sum + parseInt(item.quantity) ,0)
}
}
export default connect(mapStateToProps)(CartIcon)

