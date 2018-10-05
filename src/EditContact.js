import React, { Component } from "react"
import { Consumer } from "./context"
// import uuid from "uuid"
import InputGroup from "./InputGroup"
import axios from "axios"

// NOTE: I didn't end up using this component, instead I added
// the "edit" functionality in 'Contact.js'

export default class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = async (dispatch, e) => {
    e.preventDefault()

    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    })
    this.props.history.push("/")
  }

  render() {
    const { name, email, phone, errors } = this.state

    return (
      <Consumer>
        {value => {
          const { dispatch } = value
          return (
            <div className="card mb-3">
              <div className="card-header">Edit Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <InputGroup
                    label="Name"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    errors={errors.name}
                  />
                  <InputGroup
                    label="E-Mail"
                    name="email"
                    type="email"
                    value={email}
                    onChange={this.handleChange}
                    errors={errors.email}
                  />
                  <InputGroup
                    label="Phone"
                    name="phone"
                    value={phone}
                    onChange={this.handleChange}
                    errors={errors.phone}
                  />
                  <input
                    type="submit"
                    value="Update Contact"
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
