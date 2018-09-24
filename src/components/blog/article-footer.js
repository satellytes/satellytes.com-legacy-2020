import React from 'react';
import styled from 'styled-components';
import { HeadlineParagraph } from '../shared/headline';
import Img from "gatsby-image"

import Author from './author';

const ArticleFooter = ({article}) => {
  console.log(article);

  return (
    <footer>
      <Author author={article.author}/>
    </footer>
  )

}

export default ArticleFooter;