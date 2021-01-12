import './App.css';
import { Router, Switch, Route } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import NotFound from './pages/NotFound'
import { createBrowserHistory } from 'history';
import Registration from './pages/Registration';
import Login from './pages/Login';
import PublicRoute from './components/routes/PublicRoute';
import PrivateRoute from './components/routes/PrivateRoute';
import Todo from './pages/Todo';

export const history = createBrowserHistory();

function App() {

  return (
    <Router history={ history }>
      <NavMenu />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <PublicRoute exact path="/signup" restricted={true} component={Registration} />
        <PublicRoute exact path="/signin" restricted={true} component={Login} />
        <PrivateRoute exact path="/todo" component={Todo} />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
