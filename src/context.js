import React, { Component } from "react"

const Context = React.createContext()
const reducer = (state, action) => {
  switch (action.type) {
    case `DELETE_CONTACT`:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      }
    default:
      console.log("NO ACTION FOUND")
  }
}

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Nataly Guevara",
        email: "hi@mail.com",
        phone: "954.333.2222"
      },
      {
        id: 2,
        name: "Raul Guevara",
        email: "raul@mail.com",
        phone: "305.333.3333"
      },
      {
        id: 3,
        name: "Gloria Guevara",
        email: "gloria@mail.com",
        phone: "305.333.3333"
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
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
