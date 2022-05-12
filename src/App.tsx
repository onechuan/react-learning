import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import {Provider} from "react-redux";
import store from "./store"
import ProductPage from './pages/product';
import Detail from "./pages/detail"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Home/>
        <Detail/>
        <ProductPage/>
      </Provider>
    </div>
  );
}

export default App;
