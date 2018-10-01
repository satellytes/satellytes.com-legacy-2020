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

const NavigationItemLayout = styled.div.attrs({
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
class NavigationItem extends React.Component {
  constructor(props){
    super(props);
    this.myRef = React.createRef();
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.getDOMElement = this.getDOMElement.bind(this);
    this.state = {
      current: false
    }
  }

  handleMouseEnter() {
    console.log('handleMouseEnter')
    this.props.onPreactivate(this)
  }
  handleMouseLeave() {
    console.log('handleMouseLeave')
  }

  getDOMElement() {
    return this.myRef.current;
  }

  isActive = ({ isCurrent }) => {

    this.setState({
      current: true
    })

    return isCurrent ? { active: "true" } : null
  }

  render() {
    return (
      <NavigationItemLayout
        active={this.state.current}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        ref={this.myRef}>
        <Link to={this.props.to}>{this.props.title}</Link>
      </NavigationItemLayout>
    )
  }
}

const BarBlock = styled.div`
  height: 5px;
  background-color: ${({theme}) => theme.colors.light};
  transform: translate(-50%);
  transition: transform 0.5s ease-out;
`
const BarWrapper = styled.div`
  height: 5px;
  width: 100px;
  transition: transform 0.4s ease-out;
`

const Bar = ({transform}) => {
  console.log('bar transform', transform)

  return (
    <BarWrapper style={transform.bar}>
      <BarBlock style={transform.block}/>
    </BarWrapper>
  )
}
const items = [
  {title: "Home", to: '/', id: 1},
  {title: "Career", to:'/page/career', id: 2},
  {title: "Blog", to:'blog', id: 3}
]
class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {item: null, barTransform: {}};
    this.myRef = React.createRef();

    this.barTransform = null;
    this.reset = this.reset.bind(this);
    this.navigationItems = [];
  }

  hover = (item, index) => event => {
    this.setState({item})
  }

  preactivate(item) {
    const element = item.getDOMElement();
    const transform = this.getTransform(element);

    this.setState({
      barTransform: transform
    })
  }

  getTransform(element) {
    const itemBounding = element.getBoundingClientRect();
    const scale = itemBounding.width/100;
    const x = (itemBounding.x + itemBounding.width/2) + 'px';

    console.log(x);


    return {
      bar: {
        transform: `translateX(${x})`
      },
      block: {
        transform: `translate(-50%) scale(${scale}, 1)`
      }
    }
  }

  get currentItem() {
    const item = this.navigationItems[0];
    return item;
  }

  reset() {
    console.log('reset')
    if(!this.currentItem) {
      return;
    }
    const element = this.currentItem.getDOMElement();
    const transform = this.getTransform(element);

    this.setState({
      barTransform: transform
    })
  }

  addNavigationItem = index =>  ref => {
    this.navigationItems[index] = ref;
  }

  render() {
    this.items = items.map( (item, index) => (
      <NavigationItem
        ref={this.addNavigationItem(index)}
        onPreactivate={item => this.preactivate(item)}
        title={item.title}
        to={item.to}
        key={item.to}>

        </NavigationItem>
    ));

    return (
      <div ref={this.myRef} onMouseLeave={this.reset}>
        <NavigationLayout>
          {this.items}
        </NavigationLayout>
        <Bar transform={this.state.barTransform}/>
      </div>
  )}
}

export default Navigation
