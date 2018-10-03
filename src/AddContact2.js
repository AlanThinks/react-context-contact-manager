import React, { Component } from "react"

export default class AddContact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      phone: ""
    }
    this.nameInput = React.createRef()
    this.phoneInput = React.createRef()
    this.emailInput = React.createRef()
  }
  onSubmit = e => {
    e.preventDefault()
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    }
    console.log(contact)
  }
  static defaultProps = {
    name: "Leo Messi",
    email: "leo@barca.com",
    phone: "305.111.1111"
  }
  render() {
    const { name, email, phone } = this.props
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                name="name"
                placeholder="Enter Name..."
                type="text"
                className="form-control form-control-lg"
                defaultValue={name}
                ref={this.nameInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Email</label>
              <input
                name="email"
                placeholder="Enter Email..."
                type="email"
                className="form-control form-control-lg"
                defaultValue={email}
                ref={this.emailInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Phone</label>
              <input
                name="phone"
                placeholder="Enter Phone..."
                type="text"
                className="form-control form-control-lg"
                defaultValue={phone}
                ref={this.phoneInput}
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
