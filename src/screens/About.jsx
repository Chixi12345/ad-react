import React from "react";
import Header from "../components/Header";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { headerName } from "../redux/counter";

const About = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Header headerName={dispatch(headerName("Abouttt"))} />
      <div>About US</div>
    </div>
  );
};

export default About;
