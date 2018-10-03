import React, { Component } from "react"

export default class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  }
  render() {
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                name="name"
                placeholder="Enter Name..."
                type="text"
                className="form-control form-control-lg"
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Email</label>
              <input
                name="email"
                placeholder="Enter Email..."
                type="email"
                className="form-control form-control-lg"
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Phone</label>
              <input
                name="phone"
                placeholder="Enter Phone..."
                type="text"
                className="form-control form-control-lg"
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
  }
}
