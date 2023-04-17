import React from "react";
import { useSelector } from "react-redux";

export default function Posts() {
  const { name } = useSelector((state) => state.user);
  return <div>{name}</div>;
}
