import React from "react";
import Header from "../components/Header";
import { UseSelector, useDispatch } from "react-redux";
import { headerName } from "../redux/counter";

const Services = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Header headerName={dispatch(headerName("Servicesss"))} />
      <div>Services</div>
    </div>
  );
};

export default Services;
