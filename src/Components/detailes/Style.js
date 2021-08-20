
import styled from "styled-components";
import { Link} from 'react-router-dom';

export const BreadcrumbBg =styled.ol`
background-color: white;
font-size:14px;
`

export const BreadcrumbItemLink =styled(Link)`
background-color:  white;
color:black;

text-decoration:none;
font-size:14px;
&:hover{
    color:#CB4335;

    text-decoration:none;
}
`
export const BreadcrumbItem =styled.li`
color:#CB4335;
letter-spacing: 0.2px;
font-weight:bold;

`

export const Container =styled.div`

background-color: white;
`
export const Image =styled.img`

height:20rem;
width:20rem;

`
export const DetailesContainer =styled.div`

border-bottom:solid 1px #D7DBDD;
padding :17px;
width:28rem;

`
export const Lable = styled.span`


`
export const Detaile = styled.span`
color:#CB4335;
letter-spacing: 0.2px;
font-weight:bold;
font-size:13px;


`
export const Input = styled.input`
border: 1px solid #D7DBDD;
outline: none;
`
export const Btn = styled.button`

border: 1px solid #D7DBDD;
background-color:  #F2F3F4;
outline: none;
&:focus {
    border: 1px solid #D7DBDD;
    background-color:  #F2F3F4;
    outline: none;
  }
`
export const WISHILIST = styled.a`
font-size:14.4px;
color:#CB4335;
text-decoration:none;
&:hover{
    color:black;

}

`

export const AddedBtn = styled.button`
padding-right:140px;
padding-left:140px;

&:hover{
    background-color:#CB4335;

}

`

