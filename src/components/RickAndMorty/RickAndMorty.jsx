import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import { Rating } from "@mui/material";
const RickAndMorty = () => {
  const API = "https://rickandmortyapi.com/api/character";
  const [data, setData] = useState([]);
  async function getData() {
    let res = await axios(API);
    // console.log(res);
    setData(res.data.results);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h2>Rick And Morty</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          alignItems: "center",
        }}>
        {data.map(item => (
          <div className="card" key={item.id}>
            <h4>{item.name}</h4>
            <img src={item.image} alt="" width="300px" />

            <div>{item.species}</div>
            <div>{item.status}</div>
            <Rating name="simple-controlled" defaultValue={0} precision={0.5} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default RickAndMorty;
