import React ,{Component} from "react";
import { Carousell ,Div ,Image } from "./Style.js";
import './mysass.scss';
import axios from 'axios';
class Carousel extends  Component{
    state ={
        carousel : [],
        active : "active"
    }
    componentDidMount(){
        axios.get('/data.json').then(res =>{
            this.setState({
                carousel : res.data.carousel
            })
        })
    }

    render(){
       const {carousel} = this.state;
       const carouselImag = carousel.map(img =>{
            return(
                <React.Fragment key = {img.id}>

                    <div className = {img.id  === 1  ? " carousel-item  active" : "carousel-item "}  >
                        <Image src={img.image} className="d-block w-100" />
                    </div>
                </React.Fragment>
                
                )

        })
    return(
        
        <div>
                   <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel">
                    <Div className="carousel-indicators ">
                            <button type="button"data-bs-target="#carouselExampleIndicators"  data-bs-slide-to="0" active = "active" className = "d-flex h-25 notactive rounded-circle" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" active = "deactivate" className = "h-25 rounded-circle notactive" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className = "h-25 rounded-circle notactive" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"  className = "h-25 rounded-circle notactive" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"  className = "h-25 rounded-circle active notactive" aria-label="Slide 5"></button>
                              
                        </Div>
                        <Carousell className="carousel-inner">
                           {carouselImag}
                        </Carousell>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
        </div>
    )}}


    export default Carousel;
 