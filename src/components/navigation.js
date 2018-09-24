import React from 'react'

import { Link } from 'gatsby'
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const NavigationLayout = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  color: ${({theme}) => theme.colors.dark};

  background-color: ${({theme}) => theme.colors.dark};
  padding-right: ${({theme}) => theme.pagePadding}px;
  color: ${({theme}) => theme.colors.white};
  justify-content: flex-start;

  ${breakpoint('sm')`
    background-color: ${({theme}) => theme.navigation.background};
    padding-left: 20px;
    padding-right: 20px;
    justify-content: flex-start;
  `}

`

const NavigationItem = styled(Link).attrs({
  className: p => p.active ? 'is-active' : '',
})`
  text-decoration: none;
  line-height: ${({theme}) => theme.navHeight}px;
  font-family: ${({theme}) => theme.fontFamily.roboto};
  font-weight: ${({theme}) => theme.fontWeight.bold};
  font-size: 1.6rem;

  color: ${({theme}) => theme.colors.white};

  &:not(:first-child){
    margin-left: 20px;
  }

  &:hover, &.is-active {
    color: ${({theme}) => theme.colors.light};
  }
`


const items = [
  {title: "Home", to: '/', id: 1},
  {title: "Career", to:'/page/career', id: 2},
  {title: "Blog", to:'blog', id: 3}
]
class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {item: null};
  }

  hover = (item, index) => event => {
    this.setState({item})
  }

  render() {
    this.items = items.map( (item, index) => (
      <NavigationItem
        activeClassName="is-active"
        key={item.to}
        to={item.to}>{item.title}</NavigationItem>
    ));

    return (
      <div>
        <NavigationLayout>
          {this.items}
        </NavigationLayout>
      </div>
  )}
}

export default Navigation
