import React, { Component } from "react"
import Contact from "./Contact"

export default class Contacts extends Component {
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

  deleteContact = id => {
    const { contacts } = this.state
    this.setState({
      contacts: contacts.filter(contact => contact.key !== id)
    })
  }
  render() {
    const { contacts } = this.state
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.key}
            id={contact.key}
            contact={contact}
            deleteClickHandler={this.deleteContact}
          />
        ))}
      </React.Fragment>
    )
  }
}
