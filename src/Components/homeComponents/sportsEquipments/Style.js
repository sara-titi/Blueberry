
import styled,{ css }  from "styled-components"; 
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export const Heading = styled.p`
font-size:20px;

`
export const ShowMore = styled(Link)`
font-size:13px;
color:#CB4335;
text-decoration:underline

`
export const Image =styled.img`
display: block;
margin-left: auto;
margin-right: auto;
height:9rem;
width:7rem;
margin-top:10px;


`
export const Name = styled.p`
color:grey;
text-decoration:none;
font-size:13px;
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
width:190px;
white-space:nowrap;

`
export const Price = styled.p`
font-size:14px;
color:#CB4335;
font-weight:bold;
padding-top:11px;
font-variant-numeric: tabular-nums;
text-align:center;
`