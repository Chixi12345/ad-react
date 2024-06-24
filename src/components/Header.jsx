import React from "react";
import { useNavigate } from "react-router-dom";
import { headerName } from "../redux/counter";
import { useDispatch, useSelector } from "react-redux";
const Header = ({ headerName }) => {
  const { sectionName } = useSelector(
    (state) => state.sectionHeading.sectionHeading
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAbout = () => {
    navigate("/about");
  };

  return (
    <div>
      <div>{sectionName}</div>

      <div onClick={handleAbout}>About</div>
      <div
        onClick={() => {
          navigate("/services");
        }}
      >
        Services
      </div>
      <div
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </div>
    </div>
  );
};

export default Header;
