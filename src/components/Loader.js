import React from 'react'

const Loader = () => {
  return (
    <React.Fragment>
      <div
        className="spinner-border text-info mb-3"
        role="status">
        <span
          className="sr-only">
          Loading...
      </span>
      </div>
      <h3 className="text-dark">
        Loading...
    </h3>
    </React.Fragment>

  )
}


export default Loader;