import React from 'react'
import Header from './header';
import { StaticQuery, graphql } from "gatsby"

import styled from 'styled-components';

import Headline from './headline';
import Copy from './copy';
import Img from "gatsby-image";


const HeadlineService = styled.h4`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 7px;
  font-weight:  ${({ theme }) => theme.fontWeight.bold};
  font-family: ${ ({theme}) => theme.fontFamily.coco };
  font-size: 1.7rem;
`

const Clients = () => (
  <StaticQuery
    query={graphql`
      query {
        reddImageMobile: file(relativePath: { eq: "clients-1.png" }) {
          childImageSharp {
            fixed(width: 126) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    `}
    render={data => {
      console.log(data)
      return (
      <div>
        <Img
          fixed={data.reddImageMobile.childImageSharp.fixed}
          backgroundColor
          title={`Photo by Ken Treloar on Unsplash`}
        />
      </div>
    )}}
  />
)

const SectionWhat = ({data}) => (
  <div>
    <Header
      headline='Angebot'
      tagline='Wir bieten nur an, was wir par excellence können.'/>

    <Headline>Full Stack Digital Services</Headline>
    <Copy>Satellytes ist eine Digital-Agentur, die um große Unternehmen kreist und ihnen bei der Transformation und Optimierung digitaler Services und Interfaces hilft. Wir bieten „Full Stack“ an, also den gesamten Prozess von Ideation bis zur Implementierung des letzten performanten Funnels und der letzten Zeile wunderschönen Codes. Auf gut deutsch:</Copy>

    <HeadlineService>UX/UI</HeadlineService>
    <Copy>Mit rund 20 Jahren Erfahrung in der Konzeption und Umsetzung digitaler Interfaces kennen und können wir das gesamte Spektrum der User Experience (UX). Der kleine, sichtbare Teil davon ist das User Interface (UI), der große unsichtbare (UX) jedoch viel relevanter für die Erreichung ihrer wirtschaftlichen Ziele. Denn nur mit benutzerfreundlichen, leicht verständlichen Journeys über alle Endgeräte, Nutzergruppen und Nutzungskontexte hinweg, erreichen die User und somit Sie ihr Ziel.</Copy>

    <HeadlineService>Full Stack</HeadlineService>
    <Copy>
    Angular, React, Vue, Node, Polymer, WebComponent, Redux, Atomic Design... - die Liste der Buzzwords nimmt kein Ende.
          Ständig tauchen neue Bibliotheken auf, die es sich zum Ziel gesetzt haben das Internet (zumindest teilweise) zu revolutionieren und somit sowohl Betrachtern als auch Entwicklern das Leben zu erleichtern.
          Viele dieser neuen Technologien verbinden ähnliche grundlegende Konzepte wie Modularität und Wiederverwendbarkeit, womit sich die zur Verfügung gestellten Instrumente der unterschiedlichen Technologien einander durchaus ähneln.
          Umso wichtiger ist es für uns den Überblick zu behalten und die Spreu vom Weizen zu trennen, um für Ihr Projekt genau diejenige Architektur wählen zu können, die eben jene Instrumente bietet die für Ihr Projekt benötigt werden.
          Dafür haben wir keine Scheu uns mit dem Modernsten des Modernen auseinanderzusetzen, ohne dabei die Produktionsreife eines Frameworks aus den Augen zu lassen.
    </Copy>

    <HeadlineService>Service Development</HeadlineService>
    <Copy>Oft versuchen Unternehmen ihre analogen Services eins zu eins zu digitalisieren. Oder sie orientieren sich am Wettbewerb und wollen alles was die anderen auch haben – nur um auf Nummer sicher zu gehen. Vielleicht ist das aber gar nicht das was ihre Nutzer wollen? Wir gehen gerne mit Ihnen den Weg ab dem ersten Schritt und erarbeiten Services, die zu Ihren KPIs und Kunden passen.</Copy>

    <Headline>Das können andere besser</Headline>
    <Copy>SEM, XR, E-Commerce, Werbung, Marketing, einfache Websites und vieles mehr. Durch unser breites und zuverlässiges Netzwerk an Freelancern und Agenturen finden wir aber für alle Ihre Ansprüche immer eine perfekte Lösung. Beauftragen Sie uns und wir stellen Ihnen vollkommen transparent ein passendes Team zusammen.</Copy>

    <Headline>Unsere Kunden</Headline>
    <Copy>Für diese Kunden haben wir in den letzten Jahren größere Projekte realisiert oder sind noch dabei</Copy>
    <Clients/>

    <Headline>Und viele weitere</Headline>
    <Copy>
    Unsere Mitarbeiter haben vor ihrer Karriere bei Satellytes viele Jahre in anderen Agenturen oder als Freelancer gearbeitet. In dieser Zeit wurden Launches, Relaunches oder andere Großprojekte realisiert. Unter anderem für Kunden wie: Mercedes-Benz, Audi, MINI, Coca-Cola, Vitra, Swarovski, Glamour, Montblanc, O2, T-Mobile, Deutsche Post, P&S Reemtsma, Bacardi, Bogner, Siemens, Siemens Mobile, T-Online, Pritt, BMW, Mazda, Constantin Film, Esprit, etc.
    </Copy>
  </div>
)

export default SectionWhat;