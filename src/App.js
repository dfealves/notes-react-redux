import React from "react";
import { Provider } from "react-redux";
import store from "./store/createStore";
import InputSection from "./components/inputSection";
import NoteSection from "./components/NoteSection";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>Minhas Notas</h1>
        <InputSection />
      </div>
      <div className="line"></div>
      <NoteSection />
    </Provider>
  );
}

export default App;
