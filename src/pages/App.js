import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../components/header/Header';
import MainPage from './main-page/MainPage';
import HistoryPage from './history/HistoryPage';
import ErrorBoundry  from '../components/error-boundry/error-boundry';

import './App.scss';


const App = () => {
  return (
    <ErrorBoundry>
      <Header />
      <Switch>
        <Route path='/' exact component={MainPage}/>
        <Route path='/history' component={HistoryPage}>
          <div>History page</div>
        </Route>
      </Switch>
    </ErrorBoundry>
  );
};

export default App;
