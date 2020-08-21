import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FormStyle = styled.div`
  background-color: #d62828;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4%;
  font-size: 1.8rem;
  font-family: "Roboto Condensed", sans-serif;
  color: #fefae0;
  * {
    text-decoration: none;
  }
  h1 {
    font-size: 4rem;
    color: #fefae0;
    letter-spacing: 1.3rem;
  }
`;
export default function Form(props) {
  const {
    values,
    submit,
    inputChange,
    checkboxChange,
    disabled,
    errors,
  } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onCheckboxChange = (evt) => {
    const { name, checked } = evt.target;
    checkboxChange(name, checked);
  };

  const onInputChange = (evt) => {
    const { name, value } = evt.target;
    inputChange(name, value);
  };

  return (
    <FormStyle>
      <Link to="/">
        <h1>HOME</h1>
      </Link>
      <form className="form" onSubmit={onSubmit}>
        <div>{errors.username}</div>
        {/* <div>{errors.address}</div>
        <div>{errors.size}</div>
        <div>{errors.topping}</div> */}
        <h1>Make your own Pizza</h1>
        <label>
          <h3>User Name</h3>
          <input
            value={values.username}
            onChange={onInputChange}
            name="username"
            type="text"
          />
        </label>
        <label>
          <h3>Address</h3>
          <input
            value={values.address}
            onChange={onInputChange}
            name="address"
            type="text"
          />
        </label>

        <label>
          <h3>Pizza Size</h3>
          <select onChange={onInputChange} value={values.size} name="size">
            <option value="">- Select an option -</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>

        {/* checkbox */}
        <div>
          <h3>Choose your topping </h3>
          <label>
            pepperoni &nbsp;  &nbsp;
            <input
              type="checkbox"
              name="pepperoni"
              checked={values.topping.pepperoni === true}
              onChange={onCheckboxChange}
            />
          </label>
            <br/>
          <label>
            cheese  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;
            <input
              type="checkbox"
              name="cheese"
              checked={values.topping.cheese === true}
              onChange={onCheckboxChange}
            />
          </label>
          <br/>
          <label>
            bacon &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;
            <input
              type="checkbox"
              name="bacon"
              checked={values.topping.bacon === true}
              onChange={onCheckboxChange}
            />
          </label>
          <br/>
          <label>
            pineapple &nbsp;   &nbsp;
            <input
              type="checkbox"
              name="pineapple"
              checked={values.topping.pineapple === true}
              onChange={onCheckboxChange}
            />
          </label>
          <br/>
          <label>
            chicken &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;
            <input
              type="checkbox"
              name="chicken"
              checked={values.topping.chicken === true}
              onChange={onCheckboxChange}
            />
          </label>
          <br/>
          <label>
            black olives &nbsp;
            <input
              type="checkbox"
              name="blackolives"
              checked={values.topping.blackolives === true}
              onChange={onCheckboxChange}
            />
          </label>
          <br/>
        </div>

        <label htmlFor="special">
          <h3>Special Instructions</h3> 
        </label>
        <textarea
          name="special"
          id="special"
          onChange={onInputChange}
          value={values.special}
        /> 
        <br/>
        <button disabled={disabled}>Add to Order</button>
      </form>
    </FormStyle>
  );
}


