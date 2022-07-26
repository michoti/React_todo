import React, { Children } from 'react'

const PageTitle = ({Children}) => {
  return (
    <div>
        <h1>{Children}</h1>
    </div>
  )
}

export default PageTitle