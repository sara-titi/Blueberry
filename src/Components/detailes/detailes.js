import React,{useEffect,useState} from 'react';
import axios from "axios";
import {useParams,useLocation} from 'react-router-dom';
import { Container } from "./Style.js";
  
import ProductCard from "../ProductCard/ProductCard";

const Detailes = ()=>{
  const [mobiles ,setMobiles]=useState([]);
  

    const [toys ,setToys]=useState([]);
    const [electronics ,setElectronics]=useState([]);
    
    const [perfumes ,setPerfumes]=useState([]);

    const [sportsEquipments ,setSportsEquipments]=useState([]);
    const [watches ,setWatches]=useState([]);
    useEffect(()=>{
      axios.get('/data.json').then(res=>{ 
        setMobiles(res.data.mobile);
        setPerfumes(res.data.perfumes);

        setToys(res.data.toys);
        setElectronics(res.data.electronics);

        setSportsEquipments(res.data.sportsEquipments);
        setWatches(res.data.watches);
      
      
      });
    })
    const params = useParams();
    const id =params.id;
    const loction = useLocation();
     
    const mobilesList = mobiles.map(function(product){
        if(product.id == id && loction.pathname ==`/MobileProducts/Detailes/${id}`){
          
            return(
              <React.Fragment>
                 <ProductCard product ={product}  key={product.id}/>
              </React.Fragment>
              )}})
                
     const perfumesList =perfumes.map(function(product){
          if(product.id == id && loction.pathname ==`/PerfumesProducts/Detailes/${id}`){
          
                return(
                  <React.Fragment>
                  <ProductCard product ={product} key={product.id} />
             </React.Fragment>
             )}})

        const toysList =toys.map(function(product){
          if(product.id == id && loction.pathname ==`/ToyProducts/Detailes/${id}`){
               return(
                    <React.Fragment>
                         <ProductCard product ={product}  key={product.id}/>
                    </React.Fragment>
                    )}})

   const electronicsList =electronics.map(function(product){
    if(product.id == id && loction.pathname ==`/ElectronicsProducts/Detailes/${id}`){
         return(
          <React.Fragment>
              <ProductCard product ={product}  key={product.id}/>
         </React.Fragment>
               )}})
               
   const sportsEquipmentsList =sportsEquipments.map(function(product){
    if(product.id == id && loction.pathname ==`/SportsProducts/Detailes/${id}`){
         return(
          <React.Fragment>
            <ProductCard product ={product}  key={product.id}/>
         </React.Fragment>
         )}})
   const watchesList =watches.map(function(product){
    if(product.id == id && loction.pathname ==`/WatchesProducts/Detailes/${id}`){
         return( 
         
         <React.Fragment>
          <ProductCard product ={product} key={product.id}/>
       </React.Fragment>
         )}})


    return(
      <Container>

   
    <div className="container">
       
           {mobilesList}
           {perfumesList}
           {toysList}
           {electronicsList} 
           {sportsEquipmentsList}
            {watchesList}
        </div>
        {/**End container */}
      </Container>
    )
}
export default Detailes;