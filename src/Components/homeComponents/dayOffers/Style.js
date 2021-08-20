import styled from "styled-components"; 


export const Container = styled.div`
margin-top:20px;
margin-bottom:20px;
background-color:#D7DBDD;
height:29rem;

`
export const Card = styled.div`
width: 14rem;
height: 30rem;
margin-right:15px;
`


export const CardGroup = styled.div`
width: 58rem;
height: 20rem;
`
export const Offer = styled.span`
background-color:red;
margin-left:-15px;
width:170px;
padding:7px;
font-weight:normal;
font-size:15px;


`
export const Image = styled.img`
height:9rem;
width:7rem;
display: block;
margin-left: auto;
margin-right: auto;
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
export const OldPrice = styled.span`
text-decoration:line-through;
font-size:15px;

font-variant-numeric: tabular-nums;

`

export const NewPrice = styled.span`
font-size:17px;
color:#CB4335;
font-weight:bold;
padding-top:15px;
font-variant-numeric: tabular-nums;
`

export const Heading = styled.h2`
color:#CB4335;
`
export const ContainText = styled.div`
padding :10px;
width:200px;
white-space:nowrap;

`