import React from 'react'
import rehypeReact from "rehype-react"
import styled from 'styled-components';
import { HeadlineSection, HeadlineParagraph } from './headline';
import Copy from './copy';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    "p": Copy,
    "h1": HeadlineSection,
    "h2": HeadlineParagraph
  }
}).Compiler

const MarkdownContentLayout = styled.div`
  margin-bottom: 40px;
`

const MarkdownContentful = ({markdown}) => (
  <MarkdownContentLayout>{renderAst(markdown.htmlAst)}</MarkdownContentLayout>
);

export default MarkdownContentful;