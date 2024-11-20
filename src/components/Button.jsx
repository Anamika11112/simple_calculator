import { type } from '@testing-library/user-event/dist/type'
import React, { Children, Component } from 'react'
export default class Button extends Component {
  render() {
    const {heading,type,name,onClick,children} = this.props
    return (
      <div>
        <h6>{heading}</h6>
        <button type={type} name={name} onClick={onClick}> {children}</button>
      </div>
    )
  }
}
