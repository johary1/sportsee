import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Home from "./pages/Home";
import Error from "./pages/Error";
import User from "./pages/User";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/user/:id/activity" element={<User />} />
        <Route path="/user/:id/average-sessions" element={<User />} />
        <Route path="/user/:id/today-score" element={<User />} />
        <Route path="/user/:id/activities" element={<User />} />
        <Route path="/user/:id/key-data" element={<User />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
