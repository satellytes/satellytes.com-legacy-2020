import {
  EmailShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  FacebookShareButton,
  LinkedinShareButton
} from 'react-share';

import React from "react";
import IconTwitter2 from '../../assets/svg/icon-twitter2.svg';
import IconMail from '../../assets/svg/icon-mail.svg';
import IconFacebook from '../../assets/svg/icon-facebook.svg';
import IconLinkedin from '../../assets/svg/icon-linkedin-2.svg';
import IconWhatsapp from '../../assets/svg/icon-whatsapp.svg';
import styled from 'styled-components';
import { HeadlineParagraph } from "../typography/headline";

const HorizontalLayout = styled.div`

`

const ShareButton = styled.div`
  display: inline-block;
  cursor: pointer;

  &:not(:first-child) {
    margin-left: 23px;
  }
`
export const Share = ({location, data}) => {
  const siteUrl = data.site.siteMetadata.siteUrl;
  const url = `${siteUrl}${location.pathname}`;

  return (
    <div>
      <HeadlineParagraph>Artikel teilen via</HeadlineParagraph>

      <HorizontalLayout>
        <ShareButton>
          <WhatsappShareButton url={url}>
            <IconWhatsapp/>
          </WhatsappShareButton>
        </ShareButton>

        <ShareButton>
          <EmailShareButton url={url}>
            <IconMail/>
          </EmailShareButton>
        </ShareButton>

        <ShareButton>
          <FacebookShareButton url={url}>
            <IconFacebook/>
          </FacebookShareButton>
        </ShareButton>

        <ShareButton>
          <LinkedinShareButton url={url}>
            <IconLinkedin/>
          </LinkedinShareButton>
        </ShareButton>

        <ShareButton>
          <TwitterShareButton url={url}>
            <IconTwitter2/>
          </TwitterShareButton>
        </ShareButton>
      </HorizontalLayout>
    </div>
  )
}
