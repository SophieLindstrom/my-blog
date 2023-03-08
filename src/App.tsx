import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Post, { PostModel } from "./components/Post";
import AuthorName from "./components/AuthorName";
import Home from "./routes/HomeRoute";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <>
      <h1>Sophies blogg</h1>
      <AppRouter />
    </>
  );
}

export default App;
