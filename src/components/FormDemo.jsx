import React, { useState } from "react";

export default function FormDemo() {
  const genders = [
    {
      id: 0,
      title: "Male",
    },
    {
      id: 1,
      title: "Female",
    },
    {
      id: 2,
      title: "Other",
    },
  ];

  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    gender: 0,
  });

  const handleChangeInput = (event) => {
    // const name = event.target.name;
    // const value = event.target.value;

    const { name, value } = event.target;

    //    Cập nhật state cho user
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleChangeGender = (value) => {
    setUser({
      ...user,
      gender: value,
    });
  };

  const handleSubmit = (e) => {
    // Ngăn chặn sự kiện mặc định của Form
    e.preventDefault();

    console.log("New user: ", user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Form User</h3>
      <div>
        <label htmlFor="">UserName:</label>
        <input name="userName" type="text" onChange={handleChangeInput} />
      </div>
      <div>
        <label htmlFor="">Email:</label>
        <input name="email" type="text" onChange={handleChangeInput} />
      </div>
      <div>
        <label htmlFor="">Password:</label>
        <input name="password" type="password" onChange={handleChangeInput} />
      </div>
      <div>
        <label htmlFor="">Gender:</label>
        {genders.map((item) => (
          <React.Fragment key={item.id}>
            <input
              checked={item.id === user.gender}
              onChange={() => handleChangeGender(item.id)}
              name="gender"
              type="radio"
            />{" "}
            {item.title}
          </React.Fragment>
        ))}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
