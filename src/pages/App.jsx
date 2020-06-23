import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Switch>
      <Route path='/' exact component={MainPage}>
        <div>Main page</div>
      </Route>
      <Route path='/history' component={HistoryPage}>
        <div>History page</div>
      </Route>
    </Switch>
  );
};

export default App;
