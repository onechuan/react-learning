import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import {Provider} from "react-redux";
import store from "./pages/store"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Home/>
      </Provider>
    </div>
  );
}

export default App;
