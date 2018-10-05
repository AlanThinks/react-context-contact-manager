import React, { Component } from "react"
import PropTypes from "prop-types"
import { Consumer } from "./context"
import axios from "axios"
import InputGroup from "./InputGroup"

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showContactInfo: false,
      editContact: false,
      errors: {},
      id: this.props.contact.id,
      name: this.props.contact.name,
      email: this.props.contact.email,
      phone: this.props.contact.phone
    }
  }
  static propTypes = {
    contact: PropTypes.object.isRequired
    // deleteClickHandler: PropTypes.func.isRequired
  }

  onEditClick = () => {
    this.setState({
      editContact: !this.state.editContact,
      showContactInfo: false
    })
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onShowClick = () => {
    this.setState({ showContactInfo: !this.state.showContactInfo })
  }
  onDeleteClick = (id, dispatch) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)

    dispatch({ type: "DELETE_CONTACT", payload: id })
    // this.props.deleteClickHandler(this.props.id)
  }
  onSubmit = async (dispatch, e) => {
    e.preventDefault()
    const { name, email, phone, id } = this.state
    if (name === "") {
      this.setState({ errors: { name: true } })
    } else if (email === "") {
      this.setState({ errors: { email: true } })
    } else if (phone === "") {
      this.setState({ errors: { phone: true } })
    } else {
      const newContact = {
        id: id,
        name,
        email,
        phone
      }
      // axios.post(`https://jsonplaceholder.typicode.com/users/`, newContact)
      dispatch({ type: "UPDATE_CONTACT", payload: newContact })
      this.setState({
        showContactInfo: false,
        editContact: false,
        errors: {}
      })
    }
  }

  render() {
    const {
      showContactInfo,
      editContact,
      errors,
      id,
      name,
      email,
      phone
    } = this.state

    return (
      <Consumer>
        {value => {
          const { dispatch } = value
          return (
            <div className="card card-body mb-3">
              {!editContact ? (
                <h4>
                  {name}{" "}
                  <i
                    onClick={this.onShowClick}
                    className="fas fa-sort-down"
                    style={
                      showContactInfo
                        ? { cursor: "pointer", transform: "rotate(180deg)" }
                        : { cursor: "pointer" }
                    }
                  />
                  <i
                    onClick={this.onEditClick.bind(this, id)}
                    className="fas fa-pen mr-2"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      fontSize: "5"
                    }}
                  />
                </h4>
              ) : (
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <div>
                    <i
                      onClick={e => this.setState({ editContact: false })}
                      className="fas fa-times text-secondary"
                      style={{
                        cursor: "pointer",
                        float: "right",
                        fontSize: 20
                      }}
                    />
                  </div>
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
                  <div style={{ float: "right" }}>
                    <button
                      onClick={this.onDeleteClick.bind(this, id, dispatch)}
                      className="btn btn-outline-secondary mr-2"
                    >
                      Delete
                    </button>
                    <button type="submit" className="btn btn-outline-success">
                      Update Contact
                    </button>
                  </div>
                </form>
              )}
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">{email}</li>
                  <li className="list-group-item">{phone}</li>
                </ul>
              ) : null}
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default Contact
