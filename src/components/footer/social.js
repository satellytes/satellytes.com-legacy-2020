import React from 'react'
import styled from 'styled-components';

import IconTwitter from './../../assets/svg/icon-twitter.svg';
import IconLinkedin from './../../assets/svg/icon-linkedin.svg';
import IconXing from './../../assets/svg/icon-xing.svg';

const SocialItemsLayout = styled.div`
display: grid;
grid-gap: 10px;
grid-template-columns: repeat(3, 50px);
margin-bottom: 2em;
justify-content: center;
`

const SocialLink = styled.a`
display: flex;
align-items: center;
justify-content: center;
`

const SocialItems = () => (
<SocialItemsLayout>
  <SocialLink
    target='_blank'
    href={"http://www.twitter.com/satellytes_beep"}>
    <IconTwitter/>
  </SocialLink>
  <SocialLink
    target='_blank'
    href={"https://www.linkedin.com/company/satellytes"}>
    <IconLinkedin/>
  </SocialLink>
  <SocialLink
    target='_blank'
    href={"https://www.xing.com/companies/satellytesgmbh"}>
    <IconXing/>
  </SocialLink>
</SocialItemsLayout>
)


export default SocialItems;