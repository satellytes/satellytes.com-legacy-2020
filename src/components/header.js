import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div>
    <Link to="/">
      {siteTitle}
    </Link>
  </div>
)

export default Header
