import React, { Component } from "react"
import { Consumer } from "./context"
import uuid from "uuid"
import InputGroup from "./InputGroup"
import axios from "axios"
export default class AddContact extends Component {
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
    const { name, email, phone } = this.state
    if (name === "") {
      this.setState({ errors: { name: true } })
    } else if (email === "") {
      this.setState({ errors: { email: true } })
    } else if (phone === "") {
      this.setState({ errors: { phone: true } })
    } else {
      const newContact = {
        id: uuid(),
        name,
        email,
        phone
      }
      // NOTE: jsonplaceholder server is too slow so not using promise or await
      // axios
      //   .post(`https://jsonplaceholder.typicode.com/users/`, newContact)
      //   .then(res => dispatch({ type: "ADD_CONTACT", payload: res.data }))
      // const response = await axios.post(
      //   `https://jsonplaceholder.typicode.com/users/`,
      //   newContact
      // )
      // dispatch({ type: "ADD_CONTACT", payload: response.data })

      axios.post(`https://jsonplaceholder.typicode.com/users/`, newContact)
      dispatch({ type: "ADD_CONTACT", payload: newContact })

      this.setState({
        name: "",
        email: "",
        phone: "",
        errors: {}
      })
      this.props.history.push("/")
    }
  }
  render() {
    const { name, email, phone, errors } = this.state

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
