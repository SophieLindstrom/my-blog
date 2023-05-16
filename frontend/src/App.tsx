import React from "react";
import "./App.css";
import Post, { PostModel } from "./components/Post";
import AuthorName from "./components/AuthorName";
import Home from "./routes/HomeRoute";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";

function App() {
  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
