import React from 'react';
import CartItem from "../CartItem/CartItem";

import {BreadcrumbItemHome ,BreadcrumbBg } from "./Style.js";
import {connect} from "react-redux";
import {clearCart} from "../Store/Actions/Actions";

class Cart extends React.Component{

  placeOrder = () => {
        // send the request to the server
        // clear cart
        this.props.clearCart();
        alert('We recieved your order');
    };

   



                    
      
    render(){
        return (
            <div className="container pb-4">
                     <div className="row ">
                        <div className="col mt-5">
                                <nav aria-label="breadcrumb" className="" >
                                        <BreadcrumbBg className="breadcrumb">
                                           <li className="breadcrumb-item"><BreadcrumbItemHome to ='/'>Home</BreadcrumbItemHome></li>
                                            <li className="breadcrumb-item active" aria-current="page">Cart </li>
                                        </BreadcrumbBg>
                                </nav>
                        </div>{/*end of colomn*/}
                    </div>{/*end of row*/}

                <div className="row">
                    {this.props.cartItems.map((item ,index) => 
                    
                        <div className="col-3" key={index}>
                            <CartItem item={item}  index={index}/>
                        </div>
                    )}
                </div>

                <br />
                <h3>
                    Total: {this.props.total}
                </h3>

                <button className="btn btn-danger btn-block pb-6" onClick={this.placeOrder}>Place Order</button>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        cartItems: state.cart,
        total: state.cart.reduce((total, item) => total + parseInt(item.quantity)  * parseInt(item.product.price) , 0),
    };
}




const mapDispatchToProps = (dispatch) => {
    return {
        clearCart: () => dispatch(clearCart()),
    };
}


export default connect(mapStateToProps ,mapDispatchToProps)(Cart);



