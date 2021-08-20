

import React,{useEffect,useState} from 'react';
import axios from "axios";
import {useParams,useLocation} from 'react-router-dom';

  
import ProductCard from "../ProductCard/ProductCard";

const ToysDetailes = ()=>{
    const [toys ,setToys]=useState([]);
  
    useEffect(()=>{axios.get('/data.json').then(res=>{setToys(res.data.toys);});})

    const params = useParams();
    const id =params.id;
    const loction = useLocation();
     
  
      const toysList =toys.map(function(product){
          if(product.id == id && loction.pathname ==`/ToyProducts/ToysDetailes/${id}`){
               return(
                    <React.Fragment key={product.id}>
                         <ProductCard product ={product}  key={product.id}/>
                    </React.Fragment>
                    )}})
   



    return(


   
    <div className="container">
       
           {toysList}

        
        </div>
     
 
    )
}
export default ToysDetailes;