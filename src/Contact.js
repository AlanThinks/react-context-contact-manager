import React, { Component } from "react"
import PropTypes from "prop-types"

class Contact extends Component {
  state = {
    showContactInfo: false
  }
  static propTypes = {
    contact: PropTypes.object.isRequired
  }

  onShowClick = () => {
    this.setState({ showContactInfo: !this.state.showContactInfo })
  }
  render() {
    const { name, email, phone } = this.props.contact
    const { showContactInfo } = this.state
    return (
      <div className="card card-body mb-3">
        <h4>
          {name} <i onClick={this.onShowClick} className="fas fa-sort-down" />
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">{email}</li>
            <li className="list-group-item">{phone}</li>
          </ul>
        ) : null}
      </div>
    )
  }
}

export default Contact
