import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './screens/Home/Home'
import Details from './screens/Details/Details'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/posts/:id">
          <Details />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
