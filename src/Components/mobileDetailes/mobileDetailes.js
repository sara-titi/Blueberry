import React,{useEffect,useState} from 'react';
import axios from "axios";
import {useParams,useLocation} from 'react-router-dom';

  
import ProductCard from "../ProductCard/ProductCard";

const MobileDetailes = ()=>{
  const [mobiles ,setMobiles]=useState([]);

    useEffect(()=>{
      axios.get('/data.json').then(res=>{ setMobiles(res.data.mobile); });})

    const params = useParams();
    const id =params.id;
    const loction = useLocation();
     
    const mobilesList = mobiles.map(function(product){
        if(product.id == id && loction.pathname ==`/MobileProducts/MobileDetailes/${id}`){
          
            return(
              <React.Fragment key={product.id}>
                 <ProductCard product ={product}  key={product.id}/>
              </React.Fragment>
              )}})
                
  
   



    return(


   
    <div className="container">
       
           {mobilesList}

        
        </div>
     
 
    )
}
export default MobileDetailes;