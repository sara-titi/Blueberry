

import React,{useEffect,useState} from 'react';
import axios from "axios";
import {useParams,useLocation} from 'react-router-dom';

  
import ProductCard from "../ProductCard/ProductCard";

const SportDetailes = ()=>{
    const [sportsEquipments ,setSportsEquipments]=useState([]);
      
    useEffect(()=>{axios.get('/data.json').then(res=>{ setSportsEquipments(res.data.sportsEquipments);});})

    const params = useParams();
    const id =params.id;
    const loction = useLocation();
     
  
    const sportsEquipmentsList =sportsEquipments.map(function(product){
        if(product.id == id && loction.pathname ==`/SportsProducts/SportDetailes/${id}`){
             return(
              <React.Fragment key={product.id}>
                <ProductCard product ={product}  key={product.id}/>
             </React.Fragment>
             )}})
   



    return(


   
    <div className="container">
       
           {sportsEquipmentsList}

        
        </div>
     
 
    )
}
export default SportDetailes;