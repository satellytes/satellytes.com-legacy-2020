import React from 'react'
import rehypeReact from "rehype-react"
import styled from 'styled-components';
import { HeadlineSection, HeadlineParagraph, HeadlineContent, HeadlineService } from './headline';
import Copy from './copy';
import { ListItem, UnorderedList, OrderedList } from '../list';
import Link from './link';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    "a": Link,
    "p": Copy,
    "h1": HeadlineContent,
    "h2": HeadlineSection,
    "h3": HeadlineParagraph,
    "h4": HeadlineService,
    "ul": UnorderedList,
    "ol": OrderedList,
    "li": ListItem
  }
}).Compiler

const MarkdownContentLayout = styled.div`
  margin-bottom: 40px;
`

const MarkdownContentful = ({markdown}) => (
  <MarkdownContentLayout>
    {renderAst(markdown.htmlAst)}
  </MarkdownContentLayout>
);

export default MarkdownContentful;