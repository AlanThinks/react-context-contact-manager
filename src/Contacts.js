import React, { Component } from "react"
import Contact from "./Contact"
import { Consumer } from "./context"

export default class Contacts extends Component {
  //   deleteContact = id => {
  //     const { contacts } = this.state
  //     this.setState({
  //       contacts: contacts.filter(contact => contact.key !== id)
  //     })
  //   }
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value
          return (
            <React.Fragment>
              {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </React.Fragment>
          )
        }}
      </Consumer>
    )

    //   const {contacts}=this.state
    // return (
    //   <React.Fragment>
    //     {contacts.map(contact => (
    //       <Contact
    //         key={contact.key}
    //         id={contact.key}
    //         contact={contact}
    //         deleteClickHandler={this.deleteContact}
    //       />
    //     ))}
    //   </React.Fragment>
    // )
  }
}
