import React, { Component } from "react"
import "./Main.css"
import Contacts from "./Contacts"
import Header from "./Header"
import AddContact from "./AddContact"
import { Provider } from "./context"

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
class Main extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="React/Context Contact Manager" />
          <div className="container">
            <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>
    )
  }
}

export default Main
