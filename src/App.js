import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DynamicImport from "./components/shared/DynamicImports";
import Loadable from "react-loadable";

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
  loader: () => import("./components/Home"),
  loading: Loading
});
const Topics = props => (
  <DynamicImport load={() => import("./components/Topics")}>
    {Component =>
      Component === null ? <p>Loading</p> : <Component {...props} />
    }
  </DynamicImport>
);
const Settings = props => (
  <DynamicImport load={() => import("./components/Settings")}>
    {Component =>
      Component === null ? <p>Loading</p> : <Component {...props} />
    }
  </DynamicImport>
);
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
          <hr />
          <Route exact path="/" component={Home} />
          <Route path="/topics" component={Topics} />
          <Route path="/settings" component={Settings} />
        </div>
      </Router>
    );
  }
}
export default App;
