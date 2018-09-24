import React from 'react';
import Author from './author';

const ArticleFooter = ({article}) => {
  return (
    <footer>
      <Author author={article.author}/>
    </footer>
  )

}

export default ArticleFooter;