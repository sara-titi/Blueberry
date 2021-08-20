
import styled from "styled-components";

import {Link} from 'react-router-dom';


export const BreadcrumbBg =styled.ol`
background-color: white;
margin-left:20px;
`

export const BreadcrumbItemHome =styled(Link)`
background-color: white;
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


