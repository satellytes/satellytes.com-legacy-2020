import React from 'react'
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { EventItem } from './event-item';


const isFromPast = date => {
  return new Date(date).getTime() < +new Date().getTime();
}


// get all events from the past, if less then <minFutureEvents> fill difference with past events
const distributeEvents = (edges, minFutureEvents) => {

  const splitList = edges.reduce((accu, current) => {
    const event = current.node;
    const past = isFromPast(event.date)
    if(past) {
      accu.past = [...accu.past, event];
    } else {
      accu.future = [...accu.future, event];
    }

    return accu;
  }, { past:[], future: []})


  const {past, future} = splitList;

  if(future.length < minFutureEvents) {
    const fillFromPast = past.reverse().slice(0, minFutureEvents - future.length).reverse();
    future = [...fillFromPast, ...future]
  }

  return future;
}
const Layout = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`
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
                link
                tagline
                dateShort: date(formatString: "MMM DD")
                dateTitle: date(formatString: "MMM DD, YYYY")
                date
              }
            }
          }
        }
    `}
    render={data => (
     <Layout>
        {
          distributeEvents(data.allContentfulEvents.edges, 4)
            .map( event => <EventItem key={event.id} event={event} />)
        }
      </Layout>
    )}
  />
)}

export default Events;