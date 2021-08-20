import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
display: flex;
justify-content: flex-start;
height:45px;
color:red;
background-color: #212F3D;

`

export const Navlink = styled(Link)`
color:white;
text-decoration: none;
font-family: serif;
 &:hover, &:active {
   color:white;
   text-decoration: none;
   background-color:#CB4335;
   font-weight:bold;
}

`

export const Cart = styled.span`
padding-left:80px;


`
export const Logo = styled(Link)`
color:#CB4335;
font-style: italic;
font-family: cursive;
&:hover, &:active {
    color:#CB4335;
    font-style: italic
}


`

 
export const Icon = styled.svg`
position:relative;
top:10px;

`

