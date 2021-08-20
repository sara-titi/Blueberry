
import React,{useEffect,useState} from 'react';
import axios from "axios";
import {useParams,useLocation} from 'react-router-dom';

  
import ProductCard from "../ProductCard/ProductCard";

const ElectronicsDetailes = ()=>{
    const [electronics ,setElectronics]=useState([]);

  
    useEffect(()=>{axios.get('/data.json').then(res=>{ setElectronics(res.data.electronics); });})
    const params = useParams();
    const id =params.id;
    const loction = useLocation();
     
  
                
    const electronicsList =electronics.map(function(product){
        if(product.id == id && loction.pathname ==`/ElectronicsProducts/ElectronicsDetailes/${id}`){
             return(
              <React.Fragment key={product.id}>
                  <ProductCard product ={product}  key={product.id}/>
             </React.Fragment>
                   )}})
   



    return(


   
    <div className="container">
       
           {electronicsList}

        
        </div>
     
 
    )
}
export default ElectronicsDetailes;