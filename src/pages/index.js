import React from 'react'

import Layout from '../components/layout'

import SectionIntro from '../components/landingpage/section-intro';
import SectionWhat from '../components/landingpage/section-what';
import SectionWhy from '../components/landingpage/section-why';
import SectionContact from '../components/landingpage/section-contact';

const IndexPage = () => (
  <Layout>
    <SectionIntro/>
    <SectionWhat/>
    <SectionWhy/>
    <SectionContact/>
  </Layout>
)

export default IndexPage
