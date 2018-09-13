import React from 'react'
import styled from 'styled-components';
import ContactForm from './contact-form';
import Events from './events';

// import Headline from './headline';
import Copy from './copy';

const Layout = styled.div`
  display: flex;
`

const Left = styled.div`
  flex: 0 0 50%;
`
const Right = styled.div`
  flex: 0 0 50%;
`
const SectionContact = ({events}) => (
  <Layout>
    <Left>
      <h2>Kontakt</h2>
      <Copy>Nutzen Sie unser Kontaktformular oder schreiben Sie uns eine E-Mail an</Copy>
      <ContactForm/>
    </Left>

    <Right>
      <h2>Events</h2>
      <Copy>Wir lieben es, Neues zu entdecken und neue Kontakte zu knüpfen. Dort sind wir demnächst:</Copy>
      <Events/>
      <Copy>Sie haben ein Event für uns, das wir nicht verpassen sollten?  Oder Sie hätten gerne, dass wir auf Ihrem einen Vortrag halten? Machen wir gerne.
        Schreiben Sie uns.</Copy>
    </Right>
  </Layout>
)

export default SectionContact;