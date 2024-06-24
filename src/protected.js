import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import JWT from "jwt-decode";

export const ProtectedLayout = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const history = useHistory();

  useEffect(() => {
    handleAuth();
  }, [auth]);

  const handleAuth = () => {
    let token = localStorage.getItem("token");
    if (token == "" || token == undefined || token == null) {
      return setAuth(false);
    }
    validateToken(token);
  };

  const validateToken = () => {
    try {
      let token_expired = localStorage.getItem("token");
      let decoded = JWT(token_expired);

      console.log("decoded>>>>>", decoded);
      console.log("user email...", decoded?.email);
      localStorage.setItem("User Role", decoded?.role);
      console.log("user role", decoded?.role);

      let decode_string = decoded["exp"];
      var current_time = Date.now() / 1000;
      if (decode_string < current_time) {
        localStorage.clear();
        setAuth(false);
        window.location.href = "/login";
      } else {
        setAuth(true);
      }
    } catch (e) {
      localStorage.clear();
      setAuth(false);
      //what you need to do incase the jwt is not valid
      console.log(e); //for your own debugging
    }
  };
  return (
    <div className="auth">
      {auth == null ? (
        <div>Please Wait...</div>
      ) : auth == true ? (
        children
      ) : (
        history.push(`/login`)
      )}
    </div>
  );
};
