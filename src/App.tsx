import React, { Suspense } from "react";
import Widget from "./components/Widget/Widget";
import s from "./App.module.scss";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPageAsync";
import { MainPageAsync } from "./pages/MainPage/MainPageAsync";

const App = () => {
  return (
    <div className='app'>
      <h1>APP</h1>
      <div className={s.nav}>
        <Link to='/'>Main page</Link>
        <Link to='/about'>About page</Link>
      </div>
      <Widget />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/about' element={<AboutPageAsync />} />
          <Route path='/' element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
