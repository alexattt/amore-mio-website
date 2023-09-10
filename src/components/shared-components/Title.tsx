import React, { memo } from 'react'

const Title = ({ title }: { title: string }) => {
  return (
    <div>
      <p 
        style={{ fontSize: "32px", letterSpacing: "25px", margin: "50px 0px 10px 0px" }}>
          {title.toLocaleUpperCase()}
      </p>
    </div>
  )
}

export default memo(Title)