import React from "react"
import PropTypes from "prop-types"

const InputGroup = ({ label, name, value, type, onChange, errors }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        placeholder={`Enter ${label}...`}
        type={type}
        className={
          errors
            ? "is-invalid form-control form-control-lg"
            : "form-control form-control-lg"
        }
        value={value}
        onChange={onChange}
      />
      <div className="invalid-feedback">{label} is Required</div>
    </div>
  )
}

InputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.string
}

InputGroup.defaultProps = {
  type: "text"
}
export default InputGroup
