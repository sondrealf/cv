import React from "react"
import PropTypes from "prop-types"

const Span = ({ icon, text }) => {
  return (
    <div className="flex items-center">
      {React.cloneElement(icon, {
        className: `${
          icon.props && icon.props.className
            ? icon.props.className
            : ` print:w-5 print:h-5 w-6 h-6 text-gray-600 p-1 mr-1`
        }`,
      })}
      <span
        className={` print:text-2xs text-xs text-gray-600 uppercase font-medium`}
      >
        {text}
      </span>
    </div>
  )
}

Span.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
}
export default Span
