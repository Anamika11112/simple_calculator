import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    const {name,type,value,onChange,label} = this.props
    return (
        <div className="inputSection">
            <label>{label}</label>
            <input type={type} name={name} value={value} onChange={onChange}/>
        </div>
    )
  }
}
