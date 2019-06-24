import React, { Component } from 'react'

class MoreInfoBox extends Component {
  state = { isOpen: false }

  render() {
    const { title, children } = this.props
    const { isOpen } = this.state

    return (
      <div className="info-box">
        <a onClick={() => this.setState({ isOpen: !isOpen })}>
          <p className="info-box-title clickable">
            {isOpen ? '▼' : '►'} {title}
          </p>
        </a>
        
        {isOpen && <div className="info-box-content">{children}</div>}
      </div>
    )
  }
}

export default MoreInfoBox