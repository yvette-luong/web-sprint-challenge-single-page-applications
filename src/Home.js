import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'



const HomeStyle = styled.div`
  background-color: #d62828;
  display:flex;
  justify-content:center;
  align-items:center;
  *{
    text-decoration:none;
    font-size: 4rem; 
    color: white;     
    font-family: 'Permanent Marker', cursive;
  }`

export default function Home() {
    return (
    <HomeStyle>
        <Link to='/pizza'><h2> ORDER PIZZA</h2> </Link>
    </HomeStyle>
    )
}