import React from 'react'
import DisplayHeader from '../typography/display-header';

import { HeadlineSection, HeadlineService, HeadlineParagraph } from '../typography/headline';
import Copy from '../typography/copy';
import { ListItem, UnorderedList } from '../list';
import { Content, Section, Grid, Column } from '../layout/layout';
import { Clients } from './clients';

const SectionWhat = ({data}) => (
  <Content>
    <Section breakout>
      <DisplayHeader
        tagline='Angebot'
        headline='Wir bieten nur an, was wir par excellence können.'/>
    </Section>

    <Section>
      <HeadlineSection>Full Stack Digital Services</HeadlineSection>
      <Copy>Satellytes ist eine Digital-Agentur, die um große Unternehmen kreist und ihnen bei der Transformation und Optimierung digitaler Services und Interfaces hilft. Wir bieten „Full Stack“ an, also den gesamten Prozess von Ideation bis zur Implementierung des letzten performanten Funnels und der letzten Zeile wunderschönen Codes. Auf gut deutsch:</Copy>
    </Section>

    <Section>
      <Grid>
        <Column>
          <HeadlineParagraph>UX/UI</HeadlineParagraph>
          <Copy>Mit rund 20 Jahren Erfahrung in der Konzeption und Umsetzung digitaler Interfaces kennen und können wir das gesamte Spektrum der User Experience (UX). Der kleine, sichtbare Teil davon ist das User Interface (UI), der große unsichtbare (UX) jedoch viel relevanter für die Erreichung ihrer wirtschaftlichen Ziele. Denn nur mit benutzerfreundlichen, leicht verständlichen Journeys über alle Endgeräte, Nutzergruppen und Nutzungskontexte hinweg, erreichen die User und somit Sie ihr Ziel.</Copy>

          <UnorderedList>
            <ListItem>Informationsarchitektur (und Navigation)</ListItem>
            <ListItem>Information/Content Design (Readability, Scanability, Consistency, Density, Sizes)</ListItem>
            <ListItem>User Interface Design (Atomic Design, Pattern Libraries)</ListItem>
            <ListItem>Interaction Design (Clarity, Ergonomy, Ease/Joy of Use)</ListItem>
            <ListItem>Brand Experience</ListItem>
            <ListItem>Accessibility (WAI)</ListItem>
            <ListItem>Loading-, Responsive-Strategien, Performance</ListItem>
          </UnorderedList>
        </Column>
        <Column twocol>
          <HeadlineService>Full Stack</HeadlineService>
          <Copy>
          Angular, React, Vue, Node, Polymer, WebComponent, Redux, Atomic Design... - die Liste der Buzzwords nimmt kein Ende.
                Ständig tauchen neue Bibliotheken auf, die es sich zum Ziel gesetzt haben das Internet (zumindest teilweise) zu revolutionieren und somit sowohl Betrachtern als auch Entwicklern das Leben zu erleichtern.
                Viele dieser neuen Technologien verbinden ähnliche grundlegende Konzepte wie Modularität und Wiederverwendbarkeit, womit sich die zur Verfügung gestellten Instrumente der unterschiedlichen Technologien einander durchaus ähneln.
                Umso wichtiger ist es für uns den Überblick zu behalten und die Spreu vom Weizen zu trennen, um für Ihr Projekt genau diejenige Architektur wählen zu können, die eben jene Instrumente bietet die für Ihr Projekt benötigt werden.
                Dafür haben wir keine Scheu uns mit dem Modernsten des Modernen auseinanderzusetzen, ohne dabei die Produktionsreife eines Frameworks aus den Augen zu lassen.
          </Copy>
        </Column>
      </Grid>
    </Section>

    <Section>
      <HeadlineService>Service Development</HeadlineService>
      <Copy>Oft versuchen Unternehmen ihre analogen Services eins zu eins zu digitalisieren. Oder sie orientieren sich am Wettbewerb und wollen alles was die anderen auch haben – nur um auf Nummer sicher zu gehen. Vielleicht ist das aber gar nicht das was ihre Nutzer wollen? Wir gehen gerne mit Ihnen den Weg ab dem ersten Schritt und erarbeiten Services, die zu Ihren KPIs und Kunden passen.</Copy>
    </Section>

    <Section>
      <HeadlineSection>Das können andere besser</HeadlineSection>
      <Copy>SEM, XR, E-Commerce, Werbung, Marketing, einfache Websites und vieles mehr. Durch unser breites und zuverlässiges Netzwerk an Freelancern und Agenturen finden wir aber für alle Ihre Ansprüche immer eine perfekte Lösung. Beauftragen Sie uns und wir stellen Ihnen vollkommen transparent ein passendes Team zusammen.</Copy>
    </Section>

    <Section>
      <HeadlineSection>Unsere Kunden</HeadlineSection>
      <Copy>Für diese Kunden haben wir in den letzten Jahren größere Projekte realisiert oder sind noch dabei</Copy>
    </Section>

    <Section>
      <Clients />
    </Section>

    <Section>
      <HeadlineSection>Und viele weitere</HeadlineSection>
      <Copy>
      Unsere Mitarbeiter haben vor ihrer Karriere bei Satellytes viele Jahre in anderen Agenturen oder als Freelancer gearbeitet. In dieser Zeit wurden Launches, Relaunches oder andere Großprojekte realisiert. Unter anderem für Kunden wie: Mercedes-Benz, Audi, MINI, Coca-Cola, Vitra, Swarovski, Glamour, Montblanc, O2, T-Mobile, Deutsche Post, P&S Reemtsma, Bacardi, Bogner, Siemens, Siemens Mobile, T-Online, Pritt, BMW, Mazda, Constantin Film, Esprit, etc.
      </Copy>
    </Section>
  </Content>
)

export default SectionWhat;