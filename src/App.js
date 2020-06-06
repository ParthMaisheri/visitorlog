import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layouts/Header";
import Visitors from "./components/Visitors/Visitors";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "./context";
import Addvisitor from "./components/Visitors/Addvisitor";
import Notfound from "./components/pages/Notfound";
import getNews from "./components/News/getNews";

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding="Visitor Log" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Visitors} />
              <Route exact path="/add" component={Addvisitor} />
              <Route exact path="/news" component={getNews} />
              <Route component={Notfound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
