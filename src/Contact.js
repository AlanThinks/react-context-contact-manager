import React, { Component } from "react"
import PropTypes from "prop-types"
import { Consumer } from "./context"
import axios from "axios"

class Contact extends Component {
  state = {
    showContactInfo: false
  }
  static propTypes = {
    contact: PropTypes.object.isRequired
    // deleteClickHandler: PropTypes.func.isRequired
  }

  onShowClick = () => {
    this.setState({ showContactInfo: !this.state.showContactInfo })
  }
  onDeleteClick = (id, dispatch) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)

    dispatch({ type: "DELETE_CONTACT", payload: id })
    // this.props.deleteClickHandler(this.props.id)
  }

  render() {
    const { id, name, email, phone } = this.props.contact
    const { showContactInfo } = this.state

    return (
      <Consumer>
        {value => {
          const { dispatch } = value
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  style={{ cursor: "pointer" }}
                  onClick={this.onShowClick}
                  className="fas fa-sort-down"
                />
                <i
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                />
              </h4>
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
