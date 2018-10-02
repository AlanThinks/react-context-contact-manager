import React, { Component } from "react"
import "./Main.css"
import Contacts from "./Contacts"
import Header from "./Header"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
class Main extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Improved Contacts" />
        <div className="container">
          <Contacts />
        </div>
      </div>
    )
  }
}

export default Main
