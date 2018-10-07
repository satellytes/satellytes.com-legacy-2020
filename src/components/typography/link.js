import styled from 'styled-components';

const Link = styled.a`
  color: ${ ({theme}) => theme.colors.light };
  font-family: ${ ({theme}) => theme.fontFamily.roboto };
  font-weight: ${ ({theme}) => theme.fontWeight.bold };
`

export default Link;