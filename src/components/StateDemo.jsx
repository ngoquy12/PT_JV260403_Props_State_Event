import React, { useState } from "react";

export default function StateDemo() {
  const carts = [100, 200, 300, 400];

  let [count, setCount] = useState(0);

  const [total, setTotal] = useState(() => {
    const totalPrice = carts.reduce((prev, curr) => {
      console.log("Tính toán lại");

      return prev + curr;
    }, 0);

    return totalPrice;
  });

  const [userInfo, setUserInfo] = useState({
    id: 1,
    userName: "Nguyễn Văn A",
    email: "nva@gmail.com",
  });

  const handleIncrement = () => {
    setCount((prev) => prev + 1); // prev = 0
    setCount((prev) => prev + 2); // prev = 3
    setCount((prev) => prev + 3); // prev  = 3
  };

  const handleIncrementPrice = () => {
    setTotal((prev) => prev + 1000);
  };

  const handleUpdateInfo = () => {
    setUserInfo({
      ...userInfo,
      address: "Hà Nội, VN",
      age: 21,
    });
  };

  console.log("Render");

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={handleIncrement}>Increment</button>

      <hr />
      <h3>Total price: {total}</h3>
      <button onClick={handleIncrementPrice}>Increment price</button>

      <hr />
      <h3>User info: {JSON.stringify(userInfo)}</h3>
      <button onClick={handleUpdateInfo}>Update info</button>
    </div>
  );
}
