import React from "react";

const Test = ({fname,lname,age,grade}) => {
  return (
    <>
      <h1> My name is:{fname}</h1>
      <h1>Last name:{lname}</h1>
      <h1>Age:{age}</h1>
      <h1>Grade:{grade}</h1>
    </>
  );
};

export default Test;
