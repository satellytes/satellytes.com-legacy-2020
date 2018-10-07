import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';


export const HeadlineDisplay = styled.h1`
  display: block;
  margin-top: 10px;

  font-weight: ${({theme}) => theme.fontWeight.light };
  font-family: ${ ({theme}) => theme.fontFamily.coco };
  /* color: ${({ theme }) => theme.colors.white}; */

  font-style: italic;
  font-size: 3.6rem;
  letter-spacing: 0.6px;
  line-height: 40px;

  text-transform: uppercase;

  ${breakpoint('md')`
    font-size: 6rem;
    letter-spacing: 1px;
    line-height: 64px;
  `}
`

export const HeadlineContent = styled.h1`
  font-family: ${ ({theme}) => theme.fontFamily.coco };
  font-weight: ${ ({theme}) => theme.fontWeight.bold };
  color: ${({ theme }) => theme.colors.white};
  font-size: 3.2rem;
  letter-spacing: -0.16px;
  line-height: 34px;
  margin-bottom: 16px;

  ${breakpoint('md')`
    font-size: 4rem;
    letter-spacing: -0.2px;
    line-height: 44px;
  `}
`

export const HeadlineSection = styled.h2`
  font-family: ${ ({theme}) => theme.fontFamily.coco };
  font-weight: ${ ({theme}) => theme.fontWeight.bold };
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: -0.1px;
  line-height: 24px;
  margin-bottom: 20px;

  ${breakpoint('md')`
    font-size: 3.2rem;
    letter-spacing: -0.16px;
    line-height: 36px;
  `}
`

export const HeadlineParagraph = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 7px;
  font-family: ${ ({theme}) => theme.fontFamily.roboto };
  font-weight:  ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: 0;
  line-height: 21px;

  margin-bottom: 16px;

  ${breakpoint('md')`
    font-family: ${ ({theme}) => theme.fontFamily.coco };
    font-weight:  ${({ theme }) => theme.fontWeight.bold};
    font-size: 2rem;
    letter-spacing: -0.1px;
    line-height: 24px;
  `}

`

export const HeadlineService = styled.h4`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 7px;
  font-weight:  ${({ theme }) => theme.fontWeight.bold};
  font-family: ${ ({theme}) => theme.fontFamily.coco };
  font-size: 1.7rem;
`
