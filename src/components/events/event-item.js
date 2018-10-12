import React from 'react'
import styled from 'styled-components';


const EventBox = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: ${ ({theme}) => theme.colors.light };
  border-radius: 5px;
  color: ${ ({theme}) => theme.colors.dark };
  font-size: 1.5rem;
  font-weight: ${ ({theme}) => theme.fontWeight.extraBold };
  padding: 5px;
  text-transform: uppercase;
  line-height: 1.05;
  flex-shrink: 0;
`

const isFromPast = date => {
  return new Date(date).getTime() < +new Date().getTime();
}

const EventLayout = styled.div`
  display: flex;
  font-family: ${ ({theme}) => theme.fontFamily.roboto };

  &:not(:first-child) {
    margin-top: 20px;
  }

  ${({ isPast, theme }) => isPast && `
    opacity: 0.3;
  `}
`

const Title = styled.h4`
  line-height: 1.4;
  font-size: 1.5rem;
`

const Link = styled.a`
  color: ${ ({theme}) => theme.colors.light };
  font-weight: ${ ({theme}) => theme.fontWeight.bold };
  font-size: 1.5rem;
  display: block;
  text-decoration: none;
`

const Description = styled.div`
  margin-left: 20px;
`

export const EventItem = ({event}) => (
  <EventLayout key={event.id} isPast={isFromPast(event.date)}>
    <EventBox isPast={isFromPast(event.date)} title={event.dateTitle}>
      {event.dateShort}
    </EventBox>

    <Description>
      <Title>{event.title} · {event.tagline}</Title>
      <Link href={event.link}>Details</Link>
    </Description>
  </EventLayout>
)