import React, { Component } from "react"

const Context = React.createContext()

export class Provider extends Component {
  state = {
    contacts: [
      {
        key: 1,
        name: "Nataly Guevara",
        email: "hi@mail.com",
        phone: "954.333.2222"
      },
      {
        key: 2,
        name: "Raul Guevara",
        email: "raul@mail.com",
        phone: "305.333.3333"
      },
      {
        key: 3,
        name: "Gloria Guevara",
        email: "gloria@mail.com",
        phone: "305.333.3333"
      }
    ]
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer
