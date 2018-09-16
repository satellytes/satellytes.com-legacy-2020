

const SliderBar = styled.div`
position: absolute;
bottom: 0;

transition: transform 0.4s ease-out;
`

const SliderIndicator = styled.div`
height: 2px;
width: 100px;
background-color: ${({theme}) => theme.colors.light};
transform: translate(-50%);
/* opacity: 0; */
transition: transform 0.5s ease-out, opacity .4s ease-out;
`

class Slider extends React.Component {
moveSlider() {

}
render(){
  const item = this.props.currentItem;
  const index = 2;

  const x = (this.props.offsetX) * index
  const scale = 0.5;

  const sliderStyle = {
    transform: `translateX(${x}px)`
  }
  const indicatorStyle = {
    transform: `translate(-50%) scale(${scale}, 1)`
  }
  return (
    <SliderBar style={sliderStyle}>
      <SliderIndicator style={indicatorStyle}/>
    </SliderBar>
  )
}
}
