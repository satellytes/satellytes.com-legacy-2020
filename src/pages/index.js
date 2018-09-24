import React from 'react'
import PageLayout from '../components/page-layout'
import get from 'lodash/get'

import SectionIntro from '../components/landingpage/section-intro';
import SectionWhat from '../components/landingpage/section-what';
import SectionWhy from '../components/landingpage/section-why';
import SectionContact from '../components/landingpage/section-contact';


class IndexPage extends React.Component {
  render() {
    const events = get(this, 'props.data.allContentfulEvents.edges')

    return (
      <PageLayout>
        <SectionIntro/>
        <SectionWhat/>
        <SectionWhy/>
        <SectionContact events={events}/>
      </PageLayout>
    )
  }
}


export default IndexPage




export const pageQuery = graphql`
  query PageQuery {
    allContentfulEvents {
      edges {
        node {
          title
          date(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
`