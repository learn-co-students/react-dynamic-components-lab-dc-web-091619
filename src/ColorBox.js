import React, { Component } from 'react';

class ColorBox extends Component {

  render() {
    console.log(newValue)
    const newValue = (this.props.opacity - 0.1);
    return newValue >= 0.1 ? (
      <div className="color-box" style={{opacity: 1}}>
        <ColorBox opacity={newValue} />
      </div>
    ) : null
  }

}

export default ColorBox
