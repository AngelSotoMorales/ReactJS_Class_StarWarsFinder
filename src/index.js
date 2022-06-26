import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import FavoriteCharacterList from "./components/FavoriteCharacterList/FavoriteCharacterList";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers/reducer-config";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const store = createStore(rootReducer);

//Check the correct working of actions and reducers
store.subscribe(() => console.log("store ", store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/favorites" element={<FavoriteCharacterList />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
