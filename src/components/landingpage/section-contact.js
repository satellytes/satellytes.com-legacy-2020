import React from 'react'
import styled from 'styled-components';
import {ContactForm} from './contact-form';
import Events from './events';
import { Content, Section, Grid, Column } from '../layout';
// import Headline from './headline';
import Copy from './copy';

const SectionContact = ({events}) => (
  <Content>
    <Section>
      <Grid>
        <Column>
          <h2>Kontakt</h2>
          <Copy>Nutzen Sie unser Kontaktformular oder schreiben Sie uns eine E-Mail an</Copy>
          <ContactForm/>
        </Column>
        <Column>
          <h2>Events</h2>
          <Copy>Wir lieben es, Neues zu entdecken und neue Kontakte zu knüpfen. Dort sind wir demnächst:</Copy>
          <Events/>
          <Copy>Sie haben ein Event für uns, das wir nicht verpassen sollten?  Oder Sie hätten gerne, dass wir auf Ihrem einen Vortrag halten? Machen wir gerne.
            Schreiben Sie uns.</Copy>
        </Column>
      </Grid>
    </Section>
  </Content>
)

export default SectionContact;