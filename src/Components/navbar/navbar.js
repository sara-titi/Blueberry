
import React from "react";
import  {Container  ,Icon ,Navlink,Logo ,Cart} from "./Style.js";
import CartIcon from "../CartIcon/CartIcon.js";

const  Navbar =() =>{
    return(
      
        <Container  >
                 <nav className="navbar navbar-expand-lg container ">
                        <div className="container-fluid">
                            <Logo className="navbar-brand" href="#"><Icon xmlns="http://www.w3.org/2000/svg" width="16" height="12" fill="currentColor" className="bi bi-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                </Icon>Blueberry</Logo>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                <Navlink className="nav-link active" exact to="/">Home</Navlink>
                                </li>
                                <li className="nav-item">
                                <Navlink className="nav-link"  to="/MobileProducts">Mobile Phones and Accessories </Navlink>
                                </li>
                                <li className="nav-item">
                                <Navlink className="nav-link" to="/ElectronicsProducts">Electronics</Navlink>
                                </li>
                                <li className="nav-item">
                                <Navlink className="nav-link" to="/WatchesProducts">Watches</Navlink>
                                </li>
                               
                                <li className="nav-item">
                                <Navlink className="nav-link" to="/SportsProducts">Sports Equipments</Navlink>
                                </li>
                                <li className="nav-item">
                                <Navlink className="nav-link" to="/ToyProducts">Toys</Navlink>
                                </li>
                                <li className="nav-item">
                                <Navlink className="nav-link" to="/PerfumesProducts">Perfumes</Navlink>
                                </li>
                                <li className="nav-item">
                                <Navlink className="nav-link" to="/Cart">Cart</Navlink>
                                </li>
                              

                            </ul>
                               <Cart className="navbar-text">
                                   <CartIcon />
                               </Cart>
                     

                         
                            </div>
                          
                        </div>
                
                </nav>

        </Container>
        
    );
}

export default Navbar;