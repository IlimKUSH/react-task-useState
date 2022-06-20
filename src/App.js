import React from "react";
import Header from "./components/Header/Header";
// import Pokemons from "./components/Pokemons/Pokemons";
import Pokemons2 from "./components/Pokemons2/Pokemons2";
import RickAndMorty from "./components/RickAndMorty/RickAndMorty";
import Users from "./components/Users/Users";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokemons from "./components/Pokemons/Pokemons";
import AddProduct from "./components/AddProduct/AddProduct";

const App = () => {
  return (
    // указываем, что роутинг будет в браузере
    <BrowserRouter>
      {/* header будет на всех страницах */}
      <Header />
      {/* routes для перечисления роутов */}
      <Routes>
        {/* route непосредственно сами роуты */}
        <Route path="/" element={<h1>Homepage</h1>} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemons-2" element={<Pokemons2 />} />
        <Route path="/rick-and-morty" element={<RickAndMorty />} />
        <Route path="/add" element={<AddProduct />} />
      </Routes>
      {/* footer будет на всех страницах */}
      <h1>Footer</h1>
    </BrowserRouter>
  );
};

export default App;
