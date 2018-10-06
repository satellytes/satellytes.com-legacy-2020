import React from 'react'
import styled, { css, keyframes } from 'styled-components';
import { cover, darken } from 'polished';

const progressAnimation = keyframes`
0% {
  transform: scale(0, 1);
}
100% {
  transform: scale(1, 1);
}
`

const ProgressBar = styled.div`
background-color: ${({theme}) => theme.colors.progress};
position: relative;
z-index: 2;
width: 100%;
height: 100%;
transform: scale(1, 1);
transform-origin: left;

${props => props.complete === false ? css`
  animation: 5s infinite linear ${progressAnimation};
` : null}

${props => props.complete === true ? css`
  transform: scale(1, 1);
` : null}

`
const ProgressTrack = styled.div`
${cover()}
z-index: 0;
background-color: ${({theme}) => darken(0.2, theme.colors.progress)};
`

const Progress = ({sending, complete}) => {
if(!(sending || complete)) {
  return null;
}

return (
  <ProgressTrack>
    <ProgressBar complete={complete}/>
  </ProgressTrack>
)
}


export default Progress;