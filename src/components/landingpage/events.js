import React from 'react'
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';


const EventBox = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: ${ ({theme}) => theme.colors.light };
  border-radius: 5px;
  color: ${ ({theme}) => theme.colors.dark };
  font-size: 1.5rem;
  font-weight: ${ ({theme}) => theme.fontWeight.bold };

  ${({ isPast, theme }) => isPast && `
    text-decoration: line-through;
    background-color: ${ theme.colors.grey }
  `}
`


const isFromPast = date => {
  return new Date(date).getTime() < +new Date().getTime();
}
const Events = ({events}) => {

  return (
  <StaticQuery
    query={graphql`
      query EventsQuery {
          allContentfulEvents(sort: {fields: [date], order: ASC}) {
            edges {
              node {
                id
                title
                dateShort: date(formatString: "MMM YYYY")
                dateTitle: date(formatString: "MMM DD, YYYY")
                date
              }
            }
          }
        }
    `}
    render={data => (
     <ul>
        {data.allContentfulEvents.edges.map(({ node }) => {
            return (
              <li key={node.id}>
              {node.title}
              <br/>
              <EventBox isPast={isFromPast(node.date)} title={node.dateTitle}>
                {node.dateShort}
              </EventBox>
              </li>
            )
          })}
      </ul>
    )}
  />
)}

export default Events;