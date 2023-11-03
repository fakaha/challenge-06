import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerLoginWithGoogle } from "../redux/actions/authActions";

const GoogleLogin = ({ buttonText }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (responseGoogle) =>
      dispatch(registerLoginWithGoogle(responseGoogle.access_token, navigate)),
  });

  return (
    <button className="bg-primary rounded-3" onClick={() => loginWithGoogle()}>
      {buttonText}
    </button>
  );
};

export default GoogleLogin;
