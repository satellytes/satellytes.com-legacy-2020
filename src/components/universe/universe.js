import React from 'react';
import { STAR_COORDS } from './star-coords';
import styled from 'styled-components';
import { MeteorShower } from './meteor-shower';
import { TwinkleStars } from './twinkle-stars';
import * as basicScroll from 'basicscroll'

const Layout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  pointer-events: none;
`



class Universe extends React.Component {
  constructor(props){
    super(props);
    this.myRef = React.createRef();

  }

  componentDidMount() {
    let root = document.documentElement;

    const instance = basicScroll.create({
      elem: this.myRef.current,
      from: 0,
		  to: 5600,
      props: {
        '--translateScrollY': {
          from: 0,
          to: 1
        }
      }
    })

    instance.start()

  }

  render() {
    return (
      <Layout
        ref={this.myRef}>
        {/* <svg viewBox="0 0 2000 1000" width="2000" height="1000"> */}
        <svg viewBox="0 0 2000 1000" width="100%" height="100%" preserveAspectRatio="xMinYMin slice">
          <TwinkleStars stars={STAR_COORDS.slice(0, 20)} debug={false} />
          <MeteorShower debug={false} />
        </svg>
      </Layout>
    )
  }
}
export default Universe;