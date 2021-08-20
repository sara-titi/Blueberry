
import React,{useEffect,useState} from 'react';
import axios from "axios";
import {useParams,useLocation} from 'react-router-dom';

  
import ProductCard from "../ProductCard/ProductCard";

const WatchesDetailes = ()=>{
    const [watches ,setWatches]=useState([]);  
    useEffect(()=>{axios.get('/data.json').then(res=>{setWatches(res.data.watches);
});})

    const params = useParams();
    const id =params.id;
    const loction = useLocation();
     
  
    const watchesList =watches.map(function(product){
        if(product.id == id && loction.pathname ==`/WatchesProducts/WatchesDetailes/${id}`){
             return( 
             
             <React.Fragment key={product.id}>
              <ProductCard product ={product} key={product.id}/>
           </React.Fragment>
             )}})
   



    return(


   
    <div className="container">
       
           {watchesList}

        
        </div>
     
 
    )
}
export default WatchesDetailes;