import React from "react";
import Header from "../components/Header";
import { decrement, increment, incrementByAmount } from "../redux/counter";
import { headerName } from "../redux/counter";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const { count } = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <Header headerName={dispatch(headerName("Homee"))} />
      <div className="App">
        <div>
          Count is <span>{count}</span>
        </div>

        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increase Count{" "}
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Decrease Count
        </button>
        <button
          onClick={() => {
            dispatch(incrementByAmount(33));
          }}
        >
          Increment by 33
        </button>
      </div>
    </div>
  );
};

export default Home;
