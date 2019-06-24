import React from 'react'

const MoreInfoBox = ({ title, children }) => {
  return (
    <div className="info-box">
      <p className="info-box-title">{title}</p>
      <div className="info-box-content">{children}</div>
    </div>
  )
}

export default MoreInfoBox