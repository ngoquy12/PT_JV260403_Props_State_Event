import React, { useState } from "react";
import ChildrenComponent from "./ChildrenComponent";

export default function ParentComponent() {
  const userName = "Nguyễn Văn A";
  const age = 21;
  const userInfo = {
    id: 1,
    address: "Hà Nội, VN",
  };

  const [isShow, setIsShow] = useState(false);

  const handleToggle = () => {
    setIsShow(!isShow);
  };

  return (
    <div>
      <h3>ParentComponent</h3>
      <button onClick={handleToggle}>{isShow ? "Ẩn" : "Hiện"}</button>

      {isShow ? (
        <ChildrenComponent
          userNameProps={userName}
          ageProps={age}
          userInfoProps={userInfo}
        ></ChildrenComponent>
      ) : (
        <></>
      )}

      {isShow && (
        <ChildrenComponent
          userNameProps={userName}
          ageProps={age}
          userInfoProps={userInfo}
        ></ChildrenComponent>
      )}
    </div>
  );
}
