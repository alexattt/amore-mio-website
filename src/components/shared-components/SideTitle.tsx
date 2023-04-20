import React from 'react'

const SideTitle = ({ title }: { title: string }) => {
  return (
    <div>
      <p style={{ fontSize: "28px", writingMode: "vertical-rl", textOrientation: "upright", letterSpacing: "25px" }}>{title.toLocaleUpperCase()}</p>
    </div>
  )
}

export default SideTitle