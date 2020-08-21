import React from "react";
import styled from "styled-components";

const InforStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.8rem;
  font-family: 'Roboto Condensed', sans-serif;
  width: 70%;
  margin: 4% auto;
  border : 2px solid red;
  border-radius: 10px;
`

export default function Confirmation({ information }) {
  return (
    
      <InforStyle>
        <h3>Order confirmation ! </h3>
        <p>Customer Name : {information.username}</p>
        <p>Address:{information.address}</p>
        <p>Pizza size:{information.size}</p>
        <p>Special request: {information.special}</p>
        {!!information.topping && !!information.topping.length && (
          <div>
            Toppings:
            <ul>
              {information.topping.map((like, idx) => (
                <li key={idx}>{like}</li>
              ))}
            </ul>
          </div>
        )}
      </InforStyle>   
  );
}
