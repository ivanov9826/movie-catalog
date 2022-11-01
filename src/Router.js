import { Routes, Route } from "react-router-dom";
import { Catalog } from "./components/Catalog/Catalog";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";

import { MovieDetails } from "./components/MovieDetails/MovieDetails";
import { MovieForm } from "./components/MovieCreate/MovieForm";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/catalog/:id" element={<MovieDetails />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/add-movie" element={<MovieForm />} />
    </Routes>
  );
};
