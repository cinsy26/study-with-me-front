import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/shared/Header/Header.tsx";
import Login from "./pages/Login.tsx";
import CreateStudy from "./pages/Study/CreateStudy.tsx";
import MyStudy from "./pages/Study/MyStudy.tsx";
import StudyDetail from "./pages/Study/StudyDetail.tsx";
import Home2 from "./pages/Home2.tsx";
import Mypage from "./pages/Mypage.tsx";

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
          <Route path="/" element={<Home2 />} />

          <Route path="/study/create" element={<CreateStudy />} />
          <Route path="/study/mystudy" element={<MyStudy />} />
          <Route path="/study/studyinfo/:studyId" element={<StudyDetail />} />
          <Route path="/mypage" element={<Mypage />} />
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
