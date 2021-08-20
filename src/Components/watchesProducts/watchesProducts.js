
import React, { useState,useEffect } from "react";
import {Image ,BreadcrumbItemHome ,Name, Price,ContainText,Container,BreadcrumbBg } from "../Style.js";
import axios from "axios";
import {useHistory} from 'react-router-dom';


function  WatchesProducts () {
   
    const [products ,setProducts]=useState([]);
    useEffect(()=>{
        axios.get('/data.json').then(res=>{ setProducts(res.data.watches) })
    })
    const history=useHistory();
    const  handelClick = (id) =>{ history.push(`/WatchesProducts/WatchesDetailes/${id}`) }
   
    

       const productsList = products.map(product =>{
           return(
               <React.Fragment  key={product.id}>
                   <div className="col-3 mt-3"  >
                            <div className="card d-flex justify-content-center" onClick={()=> handelClick(product.id)} >
                                <Image src={product.image} className="card-img-top" />
                                <div className="card-body">
                                    
                                <ContainText> <Name  className="card-text">{product.name}</Name> </ContainText>  
                                      < Price className="card-link">{product.price}</Price>
                                </div>{/*end of card body*/}
                            </div> {/*end of card*/}
                        </div>{/*end of colomn*/}
               </React.Fragment>
           )
       })
    
    


        return(
            <Container >
           
            
             <div className="container ">
                <div className="row ">
                        <div className="col mt-5">
                                <nav aria-label="breadcrumb" className="" >
                                        <BreadcrumbBg className="breadcrumb">
                                           <li className="breadcrumb-item"><BreadcrumbItemHome to ='/'>Home</BreadcrumbItemHome></li>
                                            <li className="breadcrumb-item active" aria-current="page">Watches </li>
                                        </BreadcrumbBg>
                                </nav>
                        </div>{/*end of colomn*/}
                    </div>{/*end of row*/}
                    <div className="row pb-5">
                 
                            {productsList}
                    </div>{/**end row */}
                </div>{/**end container */}
            </Container>
        )
        
    }


    export default WatchesProducts;