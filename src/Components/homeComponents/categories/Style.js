import styled from "styled-components";

export const Container =styled.div`
margin-top:25px;
margin-bottom:20px;
margin-left:10rem;

`



export const Card =styled.div`
width:30rem;
height:22rem;
&:hover > div{
    opacity: 1;

}

`


export const Image =styled.img`
width:30rem;
height:22rem;


`
export const Text =styled.div`

color: white;
font-size: 30px;
position: absolute;
top: 50%;
left: 50%;
-webkit-transform: translate(-50%, -50%);
-ms-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
text-align: center;

`
export const Overlay =styled.div`

position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
height: 100%;
width: 100%;
opacity: 0;
transition: .5s ease;
font-weight:bolder;


`