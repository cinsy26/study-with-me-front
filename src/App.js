import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.tsx";
import Header from "./components/shared/Header/Header.tsx";
import Login from "./pages/Login.tsx";
import CreateStudy from "./pages/Study/CreateStudy.tsx";
import MyStudy from "./pages/Study/MyStudy.tsx";

function WithHeaderLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WithHeaderLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/study/create" element={<CreateStudy />} />
          <Route path="/study/mystudy" element={<MyStudy />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

/*
  <div className="App">
      <Header />
      <Home />
    </div>
    */
