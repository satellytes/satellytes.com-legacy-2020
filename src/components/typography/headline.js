import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const HeadlineContent = styled.h2`
  font-family: ${ ({theme}) => theme.fontFamily.coco };
  font-weight: ${ ({theme}) => theme.fontWeight.bold };
  font-size: 3.5rem;
  letter-spacing: -0.2px;
  line-height: 110%;

  ${breakpoint('md')`
    font-size: 4rem;
  `}
  a {
    text-decoration: none;
  }
`

export const HeadlineSection = styled.h3`
  font-family: ${ ({theme}) => theme.fontFamily.coco };
  font-weight: ${ ({theme}) => theme.fontWeight.bold };
  font-size: 2.5rem;
  margin-bottom: 20px;


  ${breakpoint('md')`
    font-size: 3rem;
  `}
`

export const HeadlineParagraph = styled.h4`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 7px;
  font-weight:  ${({ theme }) => theme.fontWeight.bold};
  font-family: ${ ({theme}) => theme.fontFamily.coco };
  font-size: 2rem;

  margin-top: 20px;
`

