import './App.css';
import { Router, Switch, Route } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import NotFound from './pages/NotFound'
import { createBrowserHistory } from 'history';
import Registration from './pages/Registration';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={ history }>
      <NavMenu />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/registration">
          <Registration />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
