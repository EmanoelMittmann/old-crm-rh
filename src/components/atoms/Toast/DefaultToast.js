import React from 'react'

export const DefaultToast = ({text, ...rest}) => {
     
  return (
    <div>
      <h5>
        {text}
      </h5>
    </div>
  )
}