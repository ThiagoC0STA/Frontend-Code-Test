import React, { useState } from "react";
import { LoginDiv } from "./styled";
import { useDispatch } from "react-redux";
import { login } from "../../redux/userSlice";

export default function LoginForm() {
  const [user, setUser] = useState();
  const dispatch = useDispatch();

  const handlelogin = () => {
    dispatch(login(user));
  };

  return (
    <LoginDiv>
      <div>
        <h2>Welcome to CodeLeap network!</h2>
        <label htmlFor="username">Please enter your username</label>
        <input
          onChange={(username) => {
            setUser(username.target.value);
          }}
          type="text"
          id="username"
        />
        <button onClick={handlelogin}>Enter</button>
      </div>
    </LoginDiv>
  );
}
