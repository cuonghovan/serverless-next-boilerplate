import React from 'react'
import Meta from '../components/Meta'
import Navbar from '../components/Navbar'
export default ({ children, meta }) => (
  <div>
    <Meta props={meta} />
    <Navbar />
    { children }
  </div>
)
