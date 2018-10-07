import React from "react";
import styled from 'styled-components';
import { Share } from './share';
import DateInfo from "./date-info";
import Separator from "./separator";


const Layout = styled.div`

`

export const ContentFooter = (props) => {

  const page = props.data.contentfulPage
  const {updatedAt, createdAt} = props;
  const showShare = props.showShare;

  return (
    <Layout>
      <DateInfo updatedAt={updatedAt} createdAt={createdAt}/>
      <Separator/>

      {showShare ?
      (
        <Share {...props} />
      ): null}

    </Layout>
  )
}