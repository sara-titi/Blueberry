
import React,{useState} from 'react';
import {Image ,Lable,Detaile,DetailesContainer
   ,WISHILIST,AddedBtn,BreadcrumbItemLink,BreadcrumbItem ,BreadcrumbBg 
   } from "./Style.js";
   import {connect} from "react-redux";

   import {addToCart} from "../Store/Actions/Actions";


const ProductCard = (props) => {

  const product = props.product;
  const [quantity ,setQuantity]=useState(0);

  const  preventDefault = (e) => {  e.preventDefault()}

  const handleQuantity = (event) => {//6
       const value = event.target.value;

        if(value < 0)
          return ;
 
          setQuantity(value)
}
const addToCart = (product) => {
  props.addToCart(product, quantity);
 }
 


    
    return (  
        <React.Fragment>
           <div className="row">
                        <div className="col mt-5">
                                <nav aria-label="breadcrumb" className="" >
                                        <BreadcrumbBg className="breadcrumb">
                                           <li className="breadcrumb-item"><BreadcrumbItemLink to ='/'>Home</BreadcrumbItemLink></li>
                                            <li className="breadcrumb-item " ><BreadcrumbItemLink to ='/MobileProducts'>{product.collection} </BreadcrumbItemLink> </li>
                                            <BreadcrumbItem className="breadcrumb-item " aria-current="page">{product.description} </BreadcrumbItem>
                                        </BreadcrumbBg>
                                </nav>
                        </div>{/*end of colomn*/}
                    </div>{/*end of row*/}

        <div className="row mt-4 mb-5">
          <div className="col-4 ms-5">
          
            <Image src={product.image}/>
          </div>
             {/**End col */}
          <div className="col">
            <DetailesContainer>

               <Lable>Name : <Detaile>{product.name}</Detaile></Lable>

            </DetailesContainer>{/**End Name */}
            <DetailesContainer>

               <Lable>Price : <Detaile>{product.price}</Detaile></Lable>

            </DetailesContainer>{/**End Price */}
            <DetailesContainer>

            <Lable>Color : <Detaile>{product.color}</Detaile></Lable>

            </DetailesContainer>{/**End Color */}
            <DetailesContainer>

            <input type="number" value={quantity} onChange={handleQuantity} />
            <WISHILIST href="#" className="ms-4" onClick={preventDefault}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
            </svg> ADD TO WISHILIST
            </WISHILIST><br />
            <Lable> Total :  <Detaile>{quantity * parseInt(product.price) }</Detaile></Lable>
            <AddedBtn type="button" className="btn btn-dark mt-3 border-0 rounded-3" onClick={() =>  addToCart(product)}>ADDED TO CART</AddedBtn>
          </DetailesContainer>{/**End Color */}

          </div>  {/**End col */}

        
        </div>
        {/**End row */}
      </React.Fragment>
    );
}
 


const mapDispatchToProps = (dispatch) => {
  return {
      addToCart: (productsInfo, quantity) => dispatch(addToCart(productsInfo, quantity)),
  };
}

export default connect(null, mapDispatchToProps)(ProductCard);