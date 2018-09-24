import React from 'react'
import {ContactForm} from './contact-form';
import Events from './events';
import { Content, Section, Grid, Column } from '../layout';
import Copy from '../shared/copy';
import { HeadlineContent } from '../shared/headline';

const SectionContact = ({events}) => (
  <Content>
    <Section breakout>
      <Grid>
        <Column>
          <HeadlineContent>Kontakt</HeadlineContent>
          <Copy>Nutzen Sie unser Kontaktformular oder schreiben Sie uns eine E-Mail an</Copy>
          <ContactForm/>
        </Column>
        <Column>
          <HeadlineContent>Events</HeadlineContent>
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