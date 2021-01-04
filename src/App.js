import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <NavMenu />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
