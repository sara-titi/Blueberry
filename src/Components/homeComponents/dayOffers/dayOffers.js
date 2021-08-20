
import React,{useEffect,useState} from "react";
import axios from 'axios';
import { Container,Card ,CardGroup ,Offer ,Image ,Name,OldPrice,NewPrice ,Heading ,ContainText} from "./Style.js";

function DayOffers() {
    const [state , setState] =useState([]);
    const [state2 , setState2] =useState([]);
    useEffect(()=>{
        axios.get('/data.json').then(res =>{
            setState(res.data.offers[0]);
            setState2(res.data.offers[1]);

        });
    })
    const offerList1 = state.map(item=>{
        return(
            <React.Fragment key={item.id}>   
                <Card className="card" >
                    
                <Image src={item.image} className="card-img-top" /> 
                <div className="card-body">
                <Offer className="badge bg-danger rounded-0">{item.offer}</Offer><br/>
                <ContainText>  <Name className="card-text mt-2" href="#">{item.name}</Name> </ContainText>
                <p className="mt-3"><NewPrice>{item.newPrice}</NewPrice>  <OldPrice>{item.oldPrice}</OldPrice>  </p>
                </div>{/**End card-body*/}

           
        </Card>{/**End card*/}
                
        </React.Fragment>  
        )
    })
    const offerList2 = state2.map(item=>{
        return(
            <React.Fragment  key={item.id}>   
                <Card className="card">
            <Image src={item.image} className="card-img-top" /> 
            <div className="card-body">
            <Offer className="badge bg-danger rounded-0">{item.offer}</Offer><br/>
            <ContainText>  <Name className="card-text mt-2" href="#">{item.name}</Name> </ContainText>
            <p className="mt-3"><NewPrice>{item.newPrice}</NewPrice>  <OldPrice>{item.oldPrice}</OldPrice>  </p>
            </div>{/**End card-body*/}

           
        </Card>{/**End card*/}
                
        </React.Fragment>  
        )
    })
    return(
        <Container className="d-flex justify-content-center align-items-center">
         
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    
                 <div className="carousel-item active">
                  <Heading>Day Offers</Heading>
                      <CardGroup className="card-group">
                    { offerList1}
                        </CardGroup>{/**End card-group*/}
                    </div>{/**End carousel-item */}
                    <div className="carousel-item ">
                  <Heading>Day Offers</Heading>
                      <CardGroup className="card-group">
                    { offerList2}
                        </CardGroup>{/**End card-group*/}
                    </div>{/**End carousel-item */}
                 
                   
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
        </Container>
    )
    
}
export default DayOffers;
