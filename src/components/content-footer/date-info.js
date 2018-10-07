import React from 'react'
import styled from 'styled-components';

const DateGroup = styled.div`
  color: #aaa;
`

const DateInfo = ({updatedAt, createdAt}) =>(
  <DateGroup>
    <span>Aktualisiert: {updatedAt}</span>, &nbsp;
    <span>Erstellt: {createdAt}</span>
  </DateGroup>
);

export default DateInfo;