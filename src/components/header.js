import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div>
    <Link to="/">{siteTitle}</Link>
    <Link to="/blog">Blog</Link>
  </div>
)

export default Header
