import { Container ,Card ,Image,Text,Overlay} from "./Style.js";
import { Link } from 'react-router-dom';
function Categories() {
 

     return(
        <div className=" d-flex justify-content-center">
            <Container className="container ">
                <div className="row ">
                
                     <div className="col-5 ">
                      <Link to= "/PerfumesProducts"> 
                        <Card className="card border-0 " >
                          <Image src="images/categories/im1.jpg" className="card-img-top"  />       
                          <Overlay>
                            <Text>Perfumes</Text>
                          </Overlay>
                          </Card>
                          </Link> 
                           </div>
                          {/**End Card */}
                         
                            <div className="col-5 ">
                            <Link to= "/MobileProducts"> 
                              <Card className="card border-0 " >
                                <Image src="images/categories/im2.jpg" className="card-img-top"  />
                                <Overlay>
                                  <Text>Accessories</Text>
                                </Overlay>
                                </Card>
                             </Link> 
                           </div>
                          {/**End Card */}
                       <div className="col-5 ">
                        <Link to= "/ToyProducts"> 
                                  <Card className="card border-0 " >
                                    <Image src="images/categories/im3.jpg" className="card-img-top"  />
                                    <Overlay>
                                      <Text>Toys</Text>
                                    </Overlay>
                                  </Card>
                           </Link> 
                           </div>
                          {/**End Card */}
                       <div className="col-5 ">
                         <Link to= "/WatchesProducts"> 
                          <Card className="card border-0 " >
                            <Image src="images/categories/im4.jpg" className="card-img-top"  />
                            <Overlay>
                              <Text>Watches</Text>
                            </Overlay>
                          </Card>
                          {/**End Card */}
                           </Link> 
                           </div>
                      
                </div>{/**end Row */}
            </Container>{/**end Grid */}
          
           </div>

     )
}

export default Categories;

