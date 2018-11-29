import React from 'react'
import { ThemeContext } from './ThemeContext';
import PropTypes from 'prop-types'

class ButtonLagi extends React.Component {

   
  render() {
    let {theme} = this.context;

    console.log(theme)
    return (
      <button> {theme} </button>
    );
  }
}

ButtonLagi.defaultProps = {
   color:'Red'
}

ButtonLagi.propTypes= {
   color: PropTypes.oneOf(['Red', 'Blue'])
}
ButtonLagi.contextType = ThemeContext;

export default ButtonLagi;