import * as React from 'react';
import ReactDOM from 'react-dom';
import Provider from "react-redux/lib/components/Provider";
import {createStore} from "redux";
import App from "./pages/App";
import {reducer} from "./reducers";

export const store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

