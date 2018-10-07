import React from 'react'

import { Link } from 'gatsby'
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Location } from '@reach/router';

let items = [
  {title: "Home", to: '/', id: 1},
  {title: "Career", to:'/page/career/', id: 2},
  {title: "Blog", to:'/blog/', id: 3, partialMatch: true}
]

items = items.filter(item => {
  return !(item.to === '/blog/' && !process.env.BLOG_ENABLED);
})

const Bar = styled.div`
  height: 2px;
  background-color: ${({theme}) => theme.colors.light};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`
const NavigationLink = styled.div.attrs({
  className: p => p.active ? 'is-active' : ''
})`
  text-decoration: none;
  line-height: ${({theme}) => theme.navHeight}px;
  font-family: ${({theme}) => theme.fontFamily.roboto};
  font-weight: ${({theme}) => theme.fontWeight.bold};
  font-size: 1.6rem;
  color: inherit;
  position: relative;


  ${breakpoint('sm')`
    &:not(:first-child){
      margin-left: 20px;
    }
  `}

  &:hover, &.is-active {
    color: ${({theme}) => theme.colors.light};
  }

  a {
    text-decoration: none;
  }
`

const startsWith = (string, search) => {
  return string.substr(0, search.length) === search;
};

class NavigationItem extends React.Component {
  isActive() {
    // partially match to match all subroutes too
    if(this.props.partialMatch) {
      return startsWith(this.props.location.pathname, this.props.to);
    }else {
      return this.props.location.pathname === this.props.to;
    }
  }

  render() {
    const active = this.isActive();

    return (
      <NavigationLink active={active}>
        <Link to={this.props.to}>{this.props.title}</Link>
        { active ? <Bar/> : null}
      </NavigationLink>
    )
  }
}

const NavigationLayout = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;

  background-color: ${({theme}) => theme.navigation.foreground};
  color: ${({theme}) => theme.navigation.background};


  ${breakpoint('sm')`
    background-color: ${({theme}) => theme.navigation.background};
    color: ${({theme}) => theme.navigation.foreground};

    padding-left: 20px;
    padding-right: 20px;
    justify-content: flex-start;
  `}

`


class Navigation extends React.Component {
  render() {

    return (
      <Location>
        {({ location }) => (
          <NavigationLayout>
          {
            items.map( (item, index) => (
              <NavigationItem
                location={location}
                title={item.title} to={item.to} key={item.to}></NavigationItem>
            ))
          }
          </NavigationLayout>
        )}
      </Location>

  )}
}

export default Navigation
