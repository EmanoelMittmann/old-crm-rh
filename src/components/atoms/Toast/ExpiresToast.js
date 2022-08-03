import React from 'react'

const ExpiresToast = ({date, ...rest}) => {
     
  return (
    <div>
      <h5>
        Sua sessão expira: <br />
        {date}
      </h5>
    </div>
  )
}

export default ExpiresToast