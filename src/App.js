import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact>
            {/* HOME (The one with the search bar) */}
            <Home />
          </Route>
          <Route path="/search" exact>
            <h1>Hello</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
