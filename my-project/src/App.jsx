import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";
import Header from "./components/header";
import Home from "./pages/Home";
import Language from "./pages/Language";
import { FormPagesUZ } from "./pages/formPages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path={"/language"} element={<Language />} />
          <Route
            exact
            path={"/formPagesUZ"}
            element={<FormPagesUZ lng="uz" />}
          />
          <Route
            exact
            path={"/formPagesRu"}
            element={<FormPagesUZ lng="ru" />}
          />
          <Route
            exact
            path={"/formPagesENG"}
            element={<FormPagesUZ lng="eng" />}
          />
        </Routes>
        <Toaster
          position="top-center"
          reverseOrder={true}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
