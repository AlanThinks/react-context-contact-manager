import React from "react"
import PropTypes from "prop-types"

const InputGroup = ({ label, name, value, type, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        placeholder={`Enter ${label}...`}
        type={type}
        className="form-control form-control-lg"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

InputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

InputGroup.defaultProps = {
  type: "text"
}
export default InputGroup
