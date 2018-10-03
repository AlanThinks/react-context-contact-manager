import React, { Component } from "react"
import { Consumer } from "./context"
import uuid from "uuid"

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
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      name="name"
                      placeholder="Enter Name..."
                      type="text"
                      className="form-control form-control-lg"
                      value={name}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Email</label>
                    <input
                      name="email"
                      placeholder="Enter Email..."
                      type="email"
                      className="form-control form-control-lg"
                      value={email}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Phone</label>
                    <input
                      name="phone"
                      placeholder="Enter Phone..."
                      type="text"
                      className="form-control form-control-lg"
                      value={phone}
                      onChange={this.handleChange}
                    />
                  </div>
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
