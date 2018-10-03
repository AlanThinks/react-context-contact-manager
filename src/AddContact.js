import React, { Component } from "react"
import { Consumer } from "./context"
import uuid from "uuid"
import InputGroup from "./InputGroup"
export default class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (dispatch, e) => {
    e.preventDefault()
    const { name, email, phone } = this.state
    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    }
    dispatch({ type: "ADD_CONTACT", payload: newContact })
    this.setState({
      name: "",
      email: "",
      phone: ""
    })
  }
  render() {
    const { name, email, phone } = this.state

    return (
      <Consumer>
        {value => {
          const { dispatch } = value
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <InputGroup
                    label="Name"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                  />
                  <InputGroup
                    label="E-Mail"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                  />
                  <InputGroup
                    label="Phone"
                    name="phone"
                    value={phone}
                    onChange={this.handleChange}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-block btn-success"
                  />
                </form>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}
