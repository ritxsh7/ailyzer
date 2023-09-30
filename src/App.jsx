import React from "react";
import Intro from "./components/Intro";
import Summary from "./components/Summary";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <main>
        <div className="app">
          <Intro />
          <Summary />
        </div>
      </main>
    </Provider>
  );
};

export default App;
