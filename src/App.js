import React, { useState, useEffect } from "react";
import Form from "./Form";
import formschema from "./formschema"
import axios from "axios";
import * as yup from "yup";
import { Route, Switch } from "react-router-dom";
import Confirmation from "./Confirmation";
import Home from "./Home";
import styled from "styled-components";

const HeaderStyle = styled.div`
  font-size: 4.3rem;
  font-family: 'Roboto Condensed', sans-serif;
  display: flex;
  justify-content: center;
`;

const initialFormValues = {
  username: "",
  address: "",
  size: "",
  topping: {
    pepperoni: false,
    cheese: false,
    bacon: false,
    pineapple: false,
    chicken: false,
    blackOlives: false,
  },
};
const initialFormErrors = {
  username: "",
  size: "",
  address: "",
};
const initialOrders = [];
const initialDisabled = true;

export default function App() {
  const [orders, setOrders] = useState(initialOrders);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const postNewOrder = (newOrder) => {
    axios
      .post("https://reqres.in/api/users", newOrder)
      .then((res) => {
        setOrders([res.data, ...orders]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setFormValues(initialFormValues);
      });
  };

  const inputChange = (name, value) => {
    yup
      .reach(formschema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: " ",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const checkboxChange = (name, isChecked) => {
    setFormValues({
      ...formValues,
      topping: {
        ...formValues.topping,
        [name]: isChecked,
      },
    });
  };

  const submit = () => {
    const newOrder = {
      username: formValues.username.trim(),
      address: formValues.address.trim(),
      size: formValues.size.trim(),
      special: formValues.special.trim(),
      topping: Object.keys(formValues.topping).filter(
        (top) => formValues.topping[top]
      ),
    };
    postNewOrder(newOrder);
  };

  useEffect(() => {
    formschema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);



  return (
    <div className="container">
      <HeaderStyle>
        <h1>Lambda Eats</h1>
      </HeaderStyle>
      <Switch>
        <Route exact path="/">       
          <Home />
        </Route>
        <Route path="/pizza">
          <Form
            values={formValues}
            inputChange={inputChange}
            checkboxChange={checkboxChange}
            submit={submit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
      </Switch>
      {orders.map((order) => {
        return <Confirmation key={order.id} information={order}/>;
      })}
    </div>
  );
}
