import React from "react";

import  {Container,Row1,Row2 ,LastLine,Copyright } from "./Style.js";


function Footer() {
    return(
        <div>
        <Container >
         <div className="container  ">
            <div className="row container">
                <div className="col-2 mt-5 ">
               <Row1> CATEGORIES </Row1> 
                </div>
                <div className="col-2  mt-5">
                <Row1>  SUPPORT</Row1> 
                </div>
                <div className="col-3  mt-5">
                <Row1>  BUYING ON BLUEBERRY</Row1> 
                </div>
                <div className="col-2  mt-5">
                <Row1>  FOLLOW US</Row1> 
                </div>
            </div>{/*end first row */}
            <div className="row container">
                <div className="col-2 ">
               <Row2 to="/MobileProducts"> Accessories </Row2> 
                </div>
                <div className="col-2 ">
                <Row2 to="/About">  About Us</Row2> 
                </div>
                <div className="col-3  ">
                <Row2 to="/Work">  How It Works</Row2> 
                </div>
                <div className="col-3 ">
                <Row2>  You Can Follow Us On Our Social media</Row2> 
                </div>
            </div>{/*end 2 row */}

            <div className="row container ">
                <div className="col-2 ">
               <Row2 to ="/WatchesProducts"> Watches </Row2> 
                </div>
                <div className="col-2 ">
                <Row2 to="/PolicyReturns">  Policy of returns</Row2> 
                </div>
                <div className="col-3  ">
                <Row2>  Buying Policies</Row2> 
                </div>
                <div className="col-3 ">
                <Row2> accounts</Row2> 
                </div>
            </div>{/*end 3 row */}
            <div className="row container">
                <div className="col-2 ">
               <Row2 to="/perfumesProducts"> Perfumes </Row2> 
                </div>
                <div className="col-2 ">
                <Row2 to="/Installment">Installment</Row2> 
                </div>
                <div className="col-3  ">
                <Row2> Buying Terms and Conditions</Row2> 
                </div>
               
            </div>{/*end 4 row */}
            <div className="row container ">
                <div className="col-2 ">
               <Row2 to="/ToyProducts"> Toys </Row2> 
                </div>
                <div className="col-2 ">
                <Row2 to="/Delivery">Shipping and delivery</Row2> 
                </div>
               
               
            </div>{/*end 5 row */}
            <div className="row container">
                <div className="col-2 ">
               <Row2 to= "/ElectronicsProducts"> Electronics </Row2> 
                </div>
                <div className="col-2 ">
                <Row2>Popular Questions</Row2> 
                </div>
               
               
            </div>{/*end 6 row */}
            </div>
        </Container>
        <LastLine className="d-flex justify-content-evenly align-items-center">
            <Copyright>Copyright © BLUEBERRY INC 2021</Copyright>
            <Copyright>Designed & Developed By Sara Titi</Copyright>
        </LastLine>
        </div>
        );
    }
    
    export default Footer;