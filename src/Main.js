import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./Main.css"
import Contacts from "./Contacts"
import Header from "./Header"
import AddContact from "./AddContact"
import AboutMe from "./AboutMe"
import NotFound from "./NotFound"
import { Provider } from "./context"

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
class Main extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="React/Context Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/new-contact" component={AddContact} />
                <Route exact path="/about/" component={AboutMe} />
                <Route exact path="/about/:id" component={AboutMe} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default Main
