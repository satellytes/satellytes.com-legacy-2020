import styled from 'styled-components';

const Copy = styled.p`
  margin: 0;
  font-family: ${ ({theme}) => theme.fontFamily.coco };
  font-weight: ${ ({theme}) => theme.fontWeight.light };
  color: ${ ({theme}) => theme.colors.white };
  font-size: 1.6rem;
  line-height: 24px;
  letter-spacing: 0;

  margin-bottom: 22px;
`

export default Copy;