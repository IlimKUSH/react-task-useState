import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Users = () => {
  const API = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([]);
  async function getData() {
    let res = await axios(API);
    console.log(res.data);
    setData(res.data);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="content">
      <h2>Users</h2>
      <div>
        {data.map(item => (
          <div className="container" key={item.id}>
            <h2> {item.name}</h2>
            <h3> {item.surname}</h3>
            <a href={item.email}>{item.email}</a>
            <h4> {item.address.street}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
