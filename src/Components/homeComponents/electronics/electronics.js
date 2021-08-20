   import React, { useState,useEffect } from "react";
    import { Heading , ShowMore,Image,ContainText,Name,Price } from "./Style.js";
    import {useHistory} from 'react-router-dom';
    
    import axios from "axios";
    
    const Electronics = () => {
        const [products ,setProducts]=useState([]);
        useEffect(()=>{
            axios.get('/data.json').then(res=>{ setProducts(res.data.electronics) })
        })
        const history=useHistory();
        const  handelClick = (id) =>{ history.push(`/ElectronicsProducts/ElectronicsDetailes/${id}`) }
    
    
        const electronicsList = products.map(function(product){
                if(product.id <= 6){
                return(
    
                    <React.Fragment key={product.id}>
                         <div className="col-2 mt-3"  >
                                <div className="card d-flex justify-content-center border-0"  onClick={()=> handelClick(product.id)}>
                                    <Image src={product.image} className="card-img-top"/>
                                    <div className="card-body">
                                    <ContainText> <Name className="card-text">{product.name}</Name> </ContainText>  
                                          < Price className="card-link">{product.price}</Price>
                                    </div>{/*end of card body*/}
                                </div> {/*end of card*/}
                               
                            </div>{/*end of colomn*/}
                    </React.Fragment>
                )}
            }
    
            )
            return(
                <div>
                  <div className="container">
                        <div className="row">
                            <div className="col-11">
                                <Heading>Electronics</Heading>
                            </div>
                            <div className="col">
                            
                                <ShowMore to ='/ElectronicsProducts'>Show More </ShowMore>
                            </div>
                        </div>{/**end row */}
    
                        <div className="row">
                          {electronicsList}
                        </div>{/**end row */}
                    </div>{/**end container */}
                </div>
            )
            }
        
    
    
        export default Electronics;