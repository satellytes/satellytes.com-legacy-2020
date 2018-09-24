import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const HeadlineContent = styled.h2`
  font-family: ${ ({theme}) => theme.fontFamily.coco };
  font-weight: ${ ({theme}) => theme.fontWeight.regular };
  font-size: 3.5rem;

  ${breakpoint('md')`
    font-size: 4rem;
  `}
  a {
    text-decoration: none;
  }
`

export const HeadlineSection = styled.h3`
  font-family: ${ ({theme}) => theme.fontFamily.coco };
  font-weight: ${ ({theme}) => theme.fontWeight.regular };
  font-size: 2.5rem;
  margin-bottom: 4px;

  ${breakpoint('md')`
    font-size: 3rem;
  `}
`

const HeadlineParagraph = styled.h4`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 7px;
  font-weight:  ${({ theme }) => theme.fontWeight.bold};
  font-family: ${ ({theme}) => theme.fontFamily.coco };
  font-size: 1.7rem;
`

