import React, { useState } from 'react'

const MoreInfoBox = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="info-box">
      <a onClick={() => setIsOpen(!isOpen)}>
        <p className="info-box-title clickable">
          {isOpen ? '▼' : '►'} {title}
        </p>
      </a>
      
      {isOpen && <div className="info-box-content">{children}</div>}
    </div>
  )
}

export default MoreInfoBox