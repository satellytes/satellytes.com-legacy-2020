import React from 'react';
import styled from 'styled-components';
import { HeadlineParagraph } from '../typography/headline';
import Img from "gatsby-image"

const ImageRound = styled(Img)`
  border-radius: 50%;
  overflow: hidden;
  grid-area: image;
`

const Image = ({author}) => (
  <ImageRound
      alt={author.name}
      key={author.image.src}
      fixed={author.image.fixed}
    />
)

const AuthorLayout = styled.div`
  display: grid;
  grid-template-columns: 55px 50px 50px 50px;
  grid-template-rows: auto;
  grid-gap: 5px;

  grid-template-areas:
    "title title title title"
    "image name name name"
    "image role role role"
    "contact contact contact contact";
`

const Name = styled.span`
  font-family: ${ ({theme}) => theme.fontFamily.roboto };
  font-weight: ${ ({theme}) => theme.fontWeight.bold };
  grid-area: name;
`

const Role = styled.span`
  font-family: ${ ({theme}) => theme.fontFamily.roboto };
  font-weight: ${ ({theme}) => theme.fontWeight.regular };
  grid-area: role;
`

const BoxTitle = styled(HeadlineParagraph)`
  grid-area: title;
`

// const Button = styled.button`
//   font-family: ${ ({theme}) => theme.fontFamily.roboto };
//   font-weight: ${ ({theme}) => theme.fontWeight.bold };
//   background-color:${ ({theme}) => theme.colors.dark };
// `

const LinksLayout = styled.div`
  grid-area: contact;
  margin-top: 10px;
`


const Link = styled.a`
  font-family: ${ ({theme}) => theme.fontFamily.roboto };
  font-weight: ${ ({theme}) => theme.fontWeight.bold };
  border: 2px solid ${ ({theme}) => theme.colors.light };
  color: ${ ({theme}) => theme.colors.light };
  padding: 6px 10px;
  border-radius: 5px;
  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover {
    background-color: ${ ({theme}) => theme.colors.light };
    color: ${ ({theme}) => theme.colors.white };
  }
`
const Links = ({xing, email}) => (
  <LinksLayout>
    <Link target="_blank" rel="noopener noreferrer" href={xing}>Profil</Link>
    <Link href={`mailto:${email}`}>Kontakt</Link>
  </LinksLayout>
);

const Author = ({author}) => (
  <AuthorLayout>
    <BoxTitle>Autor</BoxTitle>
    <Image author={author}/>
    <Name>{author.name}</Name>
    <Role>{author.role}</Role>

    <Links {...author} />
  </AuthorLayout>

)

export default Author;