import React,{useEffect,useState} from 'react';
import axios from "axios";
import {useParams,useLocation} from 'react-router-dom';

  
import ProductCard from "../ProductCard/ProductCard";

const PerfumesDetailes = ()=>{
    const [perfumes ,setPerfumes]=useState([]);
      
    useEffect(()=>{axios.get('/data.json').then(res=>{  setPerfumes(res.data.perfumes);});})

    const params = useParams();
    const id =params.id;
    const loction = useLocation();
     
  
    const perfumesList =perfumes.map(function(product){
        if(product.id == id && loction.pathname ==`/PerfumesProducts/PerfumesDetailes/${id}`){
        
              return(
                <React.Fragment key={product.id}>
                <ProductCard product ={product} key={product.id} />
           </React.Fragment>
           )}})
   



    return(


   
    <div className="container">
       
           {perfumesList}

        
        </div>
     
 
    )
}
export default PerfumesDetailes;