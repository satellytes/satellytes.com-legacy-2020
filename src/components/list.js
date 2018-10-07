import styled from 'styled-components';
// import breakpoint from 'styled-components-breakpoint';



export const ListItem = styled.li`
  list-style: none;
  position: relative;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

// this is hand-made and matches with the actual block size of the bullet
const listItemOffset = 1.5;
export const OrderedList = styled.ul`
  counter-reset: list;
  padding-left: 15px;
  font-weight: ${ ({theme}) => theme.fontWeight.light };

  padding-left: ${listItemOffset}em;

  ${ListItem} {
    position: relative;
    margin-bottom: 15px;

    &:before {
      position: absolute;
      left: -${listItemOffset}em;
      padding-right: 4px;
      counter-increment: list;
      content: "(" counter(list) ")";
    }
  }
`;

export const UnorderedList = styled.ul`
  counter-reset: list;
  padding-left: 15px;
  font-weight: ${ ({theme}) => theme.fontWeight.light };

  ${ListItem} {
    &:before {
      content: '- ';
      position: absolute;
      left: -15px;
    }
  }
`;