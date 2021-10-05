import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './screens/Home/Home'
import Edit from './screens/Edit/Edit'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/posts">
          <Home />
        </Route>
        <Route path="/posts/:id">
          <Edit />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
