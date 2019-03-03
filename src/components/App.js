import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import Youtube from './reactProjects/frontEnd/youtube/src/components/App.js';
import Seasons from './reactProjects/frontEnd/seasons/src/index.js';




class App extends React.Component{


render(){
  return(
    <Router >
        <div>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path='/frontend/youtube' component={Youtube} />
            <Route path='/frontend/seasons' component={Seasons} />
          </Switch>
      </div>
    </Router>
  );
}
}

export default App;
