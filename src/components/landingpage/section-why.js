import React from 'react'
import DisplayHeader from '../typography/display-header';
import { HeadlineSection } from '../typography/headline';
import Copy from '../typography/copy';
import { Content, Section } from '../layout/layout';

const SectionWhy = () => (
  <Content>
    <Section breakout>
      <DisplayHeader
        tagline='Versprechen'
        headline='Wir sind auf Ihrer Seite. Und auf der des Nutzers.'/>
    </Section>

    <Section>
      <HeadlineSection>Transparent</HeadlineSection>
      <Copy>Viele Agenturen schicken ihre besten Leute zum Kunden, im Hintergrund arbeiten aber dann ganz andere. Nicht bei uns: Die Leute, die sie kennenlernen, sind auch Ihr Team.</Copy>
    </Section>

    <Section>
      <HeadlineSection>Individuell & effizient</HeadlineSection>
      <Copy>Wir empfehlen Ihnen die Lösung, die für Ihr Unternehmen und für Ihre Nutzer am sinnvollsten ist – nicht das, was wir am besten verkaufen können, weil wir es schon in der Schublade haben. Trotzdem versuchen wir immer einen möglichst wirtschaftlichen Weg zu finden, Ihr Projekt zu realisieren.</Copy>
    </Section>

    <Section>
      <HeadlineSection>Nachhaltig</HeadlineSection>
      <Copy>Seien Sie sicher, dass es unser oberstes Ziel ist, fehlerfreie und sicherste Services zu realisieren, die nicht in einem Jahr schon wieder überholt werden müssen. Dazu testen wir jeden neuen Prototypen und Release und dokumentieren und veröffentlichen dann stets alles in wiederverwendbaren und erweiterbaren Pattern Libraries.</Copy>
    </Section>

    <Section>
      <HeadlineSection>Up to date</HeadlineSection>
      <Copy>Wir wissen was geht. Wir kennen jeden neuen Trend, jedes neue Tool und Framework. Wir arbeiten immer nach den neusten Standards und stellen trotzdem gleichzeitig sicher, dass alle Ihre Kunden mit jedem ihrer Endgeräte das bestmögliche Nutzererlebnis haben.</Copy>
    </Section>
  </Content>
)

export default SectionWhy;