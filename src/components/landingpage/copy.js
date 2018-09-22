import styled from 'styled-components';

const Copy = styled.p`
  line-height: 1.5;
  font-weight: ${ ({theme}) => theme.fontWeight.light };
  margin: 0;
`

export default Copy;