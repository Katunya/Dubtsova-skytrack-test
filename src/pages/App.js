import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from "../components/header/Header";
import MainPage from "./main-page/MainPage";
import HistoryPage from "./history/HistoryPage";
import './App.scss';

const App = () => {
  return (
    <div>
    <Header />
    <Switch>
      <Route path='/' exact component={MainPage}>
        <div>Main page</div>
      </Route>
      <Route path='/history' component={HistoryPage}>
        <div>History page</div>
      </Route>
    </Switch>
    </div>
  );
};

export default App;
