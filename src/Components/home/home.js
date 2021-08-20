import React from "react";
import Carousel from "../homeComponents/carousel/carousel";
import Categories from "../homeComponents/categories/categories";
import DayOffers from "../homeComponents/dayOffers/dayOffers";
import Mobile from "../homeComponents/mobile/mobile";
import Perfumes from "../homeComponents/perfumes/perfumes";
import Watches from "../homeComponents/watches/watches";
import SportsEquipments from "../homeComponents/sportsEquipments/sportsEquipments";
import Electronics from "../homeComponents/electronics/electronics";

import Toys from "../homeComponents/toys/toys";

function Home() {
    return(
        <div>
             <Carousel />
             <Categories />
             <DayOffers />
             <Mobile />
             <Perfumes />
             <SportsEquipments />
             <Toys />
             <Watches />
             <Electronics />
        </div>
    )}


    export default Home;