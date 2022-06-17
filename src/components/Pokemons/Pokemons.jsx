import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Pokemons = () => {
  const [inp1Value, setInp1Value] = useState("");
  const [inp2Value, setInp2Value] = useState("");
  // console.log(inp1Value);

  // ! callback отработает один раз при рендере страницы, так как массив зависимостей пустой
  // useEffect(() => {
  //   console.log("useEffect");
  // }, []);

  // ! следит за изменениями в стейте inp1Value
  // useEffect(() => {
  //   console.log("useEffect");
  // }, [inp1Value]);

  // ! соледит за изменением в стейте inp1Value и inp2Value
  // useEffect(() => {
  //   console.log("useEffect");
  // }, [inp1Value, inp2Value]);

  // ! следит за изменением во всез стейтах
  // useEffect(() => {
  //   console.log(123);
  // });

  return (
    <div>
      <input
        value={inp1Value}
        onChange={e => setInp1Value(e.target.value)}
        type="text"
        placeholder="input 1"
      />
      <input
        value={inp2Value}
        onChange={e => setInp2Value(e.target.value)}
        type="text"
        placeholder="input 2"
      />
    </div>
  );
};

export default Pokemons;
