import { Backdrop, CircularProgress, Paper } from "@mui/material";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Pokemons2 = () => {
  const API = "https://pokeapi.co/api/v2/pokemon/";

  const [data, setData] = useState(null);
  async function getPokemons() {
    let res = await axios(API);
    // console.log(res);
    setData(res.data.results);
  }

  // console.log(data);

  useEffect(() => {
    setTimeout(getPokemons, 1000);
    // getPokemons();
  }, []);
  return (
    <div>
      <h2>Pokemons</h2>
      {data ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}>
          {data.map(pokemon => (
            <Paper
              style={{ margin: "10px", padding: "10px" }}
              elevation={24}
              key={pokemon.url}>
              {pokemon.name}
            </Paper>
          ))}
        </div>
      ) : (
        <Backdrop
          sx={{ color: "#fff", zIndex: theme => theme.zIndex.drawer + 1 }}
          open={true}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </div>
  );
};

export default Pokemons2;
