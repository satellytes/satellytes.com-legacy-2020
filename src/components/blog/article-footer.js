import React from 'react';
import Author from './author';
import Separator from '../content-footer/separator';
import DateInfo from '../content-footer/date-info';
import { Share } from '../content-footer/share';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const TwoColumns = styled.div`


  ${breakpoint('md')`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  `}
`

const ArticleFooter = (props) => {
  const {article} = props;

  return (
    <footer>
      <DateInfo {...article}/>
      <Separator/>
      <TwoColumns>
        <Share {...props}/>
        <Author author={article.author}/>
      </TwoColumns>

    </footer>
  )

}

export default ArticleFooter;