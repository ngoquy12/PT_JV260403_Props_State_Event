import React from "react";
import Button from "./Button";

export default function ChildrenComponent({
  userNameProps,
  ageProps,
  userInfoProps,
}) {
  //   console.log("Props: ", props.userNameProps);

  //   //   Destructuring
  //   const { userNameProps } = props;

  return (
    <div>
      <h3>ChildrenComponent</h3>
      <h3>Username: {userNameProps}</h3>
      <h3>Age: {ageProps}</h3>
      <h3>User info: {JSON.stringify(userInfoProps)}</h3>

      <hr />
      <Button disabled={false}>
        <a href="#">Click me</a>
      </Button>
    </div>
  );
}
