import React from 'react'
import PropTypes from 'prop-types'
 const Button = (props) => {
    return (
        <button
        onClick={props.onClick}
        style={{ backgroundColor: props.color }}
        className='btn'
      >
        {props.text}
      </button>
    )
}
Button.defaultProps = {
    text : 'Add job', 
    color: 'steelblue',
  }
  
  Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
  }
export default Button