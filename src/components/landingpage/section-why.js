import React from 'react'
import Header from './header';
// import styled from 'styled-components';

import Headline from './headline';
import Copy from './copy';

const SectionWhy = () => (
  <div>
    <Header
      headline='Versprechen'
      tagline='Wir sind auf Ihrer Seite. Und auf der des Nutzers.'/>

    <Headline>Transparent</Headline>
    <Copy>Viele Agenturen schicken ihre besten Leute zum Kunden, im Hintergrund arbeiten aber dann ganz andere. Nicht bei uns: Die Leute, die sie kennenlernen, sind auch Ihr Team.</Copy>

    <Headline>Individuell & effizient</Headline>
    <Copy>Wir empfehlen Ihnen die Lösung, die für Ihr Unternehmen und für Ihre Nutzer am sinnvollsten ist – nicht das, was wir am besten verkaufen können, weil wir es schon in der Schublade haben. Trotzdem versuchen wir immer einen möglichst wirtschaftlichen Weg zu finden, Ihr Projekt zu realisieren.</Copy>

    <Headline>Nachhaltig</Headline>
    <Copy>Seien Sie sicher, dass es unser oberstes Ziel ist, fehlerfreie und sicherste Services zu realisieren, die nicht in einem Jahr schon wieder überholt werden müssen. Dazu testen wir jeden neuen Prototypen und Release und dokumentieren und veröffentlichen dann stets alles in wiederverwendbaren und erweiterbaren Pattern Libraries.</Copy>

    <Headline>Up to date</Headline>
    <Copy>Wir wissen was geht. Wir kennen jeden neuen Trend, jedes neue Tool und Framework. Wir arbeiten immer nach den neusten Standards und stellen trotzdem gleichzeitig sicher, dass alle Ihre Kunden mit jedem ihrer Endgeräte das bestmögliche Nutzererlebnis haben.</Copy>
  </div>
)

export default SectionWhy;