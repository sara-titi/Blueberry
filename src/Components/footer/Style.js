
import styled from "styled-components";
import {Link} from 'react-router-dom';
export const Container =styled.div`

height:15rem;
background-color:black;

`

export const Row1 =styled.div`
font-weight:bold;
font-size:16px;
color:#CB4335;
font-family: Vazir !important;
font-style: oblique;

`
export const Row2 =styled(Link)`
font-size:13px;
color:white;
text-decoration:none;
&:hover{
    color:#CB4335;
 
    text-decoration:none;
}

`
export const LastLine=styled.div`

height:1.7rem;
background-color:#CB4335;

`


export const Copyright=styled.span`
color:white;

font-size:14px;

`