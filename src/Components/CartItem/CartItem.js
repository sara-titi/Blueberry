import React from "react";
import {Image ,Name, Price,Btn,Card ,ContainText } from "./Style.js";
import { connect } from "react-redux";
import {removeFromCart} from "../Store/Actions/Actions";
function CartItem(props){
    const {item ,index} = props;
    const {product} =item
   
    return (
        <Card className="card mt-4 mb-4 ms-4 me-4 d-flex justify-content-center ">
            <Image src={product.image} className="card-img-top"  />
            <div className="card-body ">
             
                <ContainText> <Name  className="card-text">{product.name}</Name> </ContainText>  

                <Price className="card-text">
                    Price {product.price}
                    <br />
                    Quantity: { parseInt( item.quantity) }
                    <br />
                    Total: { parseInt( item.quantity) *parseInt (product.price)}
                </Price>
                <Btn  className="btn btn-danger "  onClick={() => props.removeFromCart(index)} >
                     Delete
                </Btn>
            </div>
        </Card>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (index) => dispatch(removeFromCart(index)),
    };
}

export default connect(null,mapDispatchToProps)(CartItem);