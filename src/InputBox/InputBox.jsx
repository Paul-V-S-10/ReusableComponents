import React, { Component } from 'react'
import './InputBox.css'

export default class InputBox extends Component {
  render() {
    return (
      <div className='inputbox'>
        <input type={this.props.type} required/>
        <label htmlFor="">{this.props.label}</label>
      </div>
    )
  }
}
