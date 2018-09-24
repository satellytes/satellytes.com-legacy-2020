import React from 'react'
import styled from 'styled-components';

const DateGroup = styled.div`
  color: #aaa;
`

const DateInfo = ({article}) =>(
  <DateGroup>
    <span>Aktualisiert: {article.updatedAt}</span>, &nbsp;
    <span>Erstellt: {article.createdAt}</span>
  </DateGroup>
);

export default DateInfo;