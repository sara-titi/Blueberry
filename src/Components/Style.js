
import styled from "styled-components";

import {Link} from 'react-router-dom';

export const Image =styled.img`
display: block;
margin-left: auto;
margin-right: auto;
height:9rem;
width:7rem;
margin-top:10px;


`

export const Container =styled.div`

background-color:#F2F3F4;
`

export const BreadcrumbBg =styled.ol`
background-color: #F2F3F4;
`

export const BreadcrumbItemHome =styled(Link)`
background-color: #F2F3F4;
color:#CB4335;
font-weight:bold;
text-decoration:none;
font-size:16px;
&:hover{
    color:#CB4335;
    font-weight:bold;
    text-decoration:none;
}
`
export const Name = styled.p`
color:grey;
text-decoration:none;
font-size:12px;
text-overflow:ellipsis;
overflow-hidden;
&:hover{
    color:#CB4335;
    text-decoration:none;
}
overflow:hidden;
text-align:center;

`
export const ContainText = styled.div`
padding :10px;
width:200px;
white-space:nowrap;

`
export const Price = styled.p`
font-size:17px;
color:#CB4335;
font-weight:bold;
padding-top:15px;
font-variant-numeric: tabular-nums;
text-align:center;
`