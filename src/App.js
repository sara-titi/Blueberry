
import React, { Component} from "react";
import Navbar from "./Components/navbar/navbar";
//import Detailes from "./Components/detailes/detailes";
import MobileDetailes from "./Components/mobileDetailes/mobileDetailes";
import ElectronicsDetailes from "./Components/electronicsDetailes/electronicsDetailes";
import ToysDetailes from "./Components/toysDetailes/toysDetailes";
import PerfumesDetailes from "./Components/perfumesDetailes/perfumesDetailes";
import SportDetailes from "./Components/sportDetailes/sportDetailes";
import WatchesDetailes from "./Components/watchesDetailes/watchesDetailes";



import Cart from "./Components/Cart/Cart";
import Footer from "./Components/footer/footer";
import Home from "./Components/home/home";
import MobileProducts from "./Components/mobileProducts/mobileProducts";
import PerfumesProducts from "./Components/perfumesProducts/perfumesProducts";
import SportsProducts from "./Components/sportsProducts/sportsProducts";
import ToyProducts from "./Components/toyProducts/toyProducts";
import WatchesProducts from "./Components/watchesProducts/watchesProducts";
import ElectronicsProducts from "./Components/electronicsProducts/electronicsProducts";


import About from "./Components/footerComponents/about/about";
import PolicyReturns from "./Components/footerComponents/policyReturns/policyReturns";
import Installment from "./Components/footerComponents/installment/installment";
import Delivery from "./Components/footerComponents/delivery/delivery";
import Work from "./Components/footerComponents/work/work";

import {BrowserRouter , Route} from 'react-router-dom';

import Store from "./Components/Store/Store";
import { Provider } from "react-redux";

class App extends Component {

  render(){
    return (
      <BrowserRouter>
       <div>
         <Navbar />
         <Route exact path = "/">
             <Home />
         </Route>

        

         <Route   path = "/MobileProducts" exact>
            <MobileProducts />
        
          </Route>
          <Route   path = "/ElectronicsProducts" exact>
            <ElectronicsProducts />
        
          </Route>
          <Route   path = "/PerfumesProducts" exact>
            <PerfumesProducts />
        
          </Route>
          <Route   path = "/SportsProducts" exact>
            <SportsProducts />
        
          </Route>
          <Route   path = "/ToyProducts" exact>
            <ToyProducts />
        
          </Route>
          <Route   path = "/WatchesProducts" exact>
            <WatchesProducts />
        
          </Route>
         

            

           <Route   path = "/About">
               <About />
            </Route>  
            <Route   path = "/PolicyReturns">
               <PolicyReturns />
            </Route>   

            <Route   path = "/Installment">
               <Installment />
            </Route> 
            <Route   path = "/Work">
               <Work />
            </Route> 
            <Route   path = "/Delivery">
               <Delivery />
            </Route>  

      
           <Route   path = "/:name/MobileDetailes/:id">
              <MobileDetailes />

           </Route> 

           <Route   path = "/:name/ElectronicsDetailes/:id">
              <ElectronicsDetailes />

           </Route> 
           <Route   path = "/:name/ToysDetailes/:id">
              <ToysDetailes />

           </Route>
           <Route   path = "/:name/PerfumesDetailes/:id">
              <PerfumesDetailes />

           </Route>

           <Route   path = "/:name/SportDetailes/:id">
              <SportDetailes />

           </Route>
           <Route   path = "/:name/WatchesDetailes/:id">
              <WatchesDetailes />

           </Route>
           <Route   path = "/Cart">
              <Cart />

           </Route> 
           

           <Footer />      
      </div>
     </BrowserRouter >
     
  )}}
function AppWithStore() {
   return <Provider store ={Store}><App /></Provider>
}
/*The <Provider> component makes the Redux store available to any nested components that need to access the Redux store. */
export default AppWithStore;
