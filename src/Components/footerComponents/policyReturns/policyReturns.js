import React from "react";

import  {Container ,Header ,Text,SubHeader} from "./Style.js";


function PolicyReturns() {
  return(
        <Container>

             <Header>Policy Of Return</Header>
             <Text>Products can be returned within 14 days from the date of receiving the order, provided that they comply with some of the following cases:</Text>
             <SubHeader>First case:</SubHeader>
             <Text>The product was not what I expected (if the packaging was not opened) / does not match the description on the site. If you do not want the product, you must return it without using it, in its original packaging, closed as-is and all stickers are in proper condition.</Text>
            
             <SubHeader>second case:</SubHeader>
             <Text>If the product is damaged if it arrives to you (reported within 24 hours) The product returned must be in its original packaging, and all accessories, stickers, and gifts should also be returned with the product. (Within 7 days) If the product has a manufacturing defect, you must pack the product that is returned in its original packaging, and all accessories, stickers, and gifts must also be returned with the product. (Within 14 days)</Text>
            
        </Container>
        
        
    )}
        export default PolicyReturns;