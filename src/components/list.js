import styled, {css} from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const List = styled.ul`
  counter-reset: list;
  padding-left: 15px;
  font-weight: ${ ({theme}) => theme.fontWeight.light };
`;

export const ListItem = styled.li`
  list-style: none;
  position: relative;
  margin-bottom: 5px;

  &:before {
    content: '- ';
    position: absolute;
    left: -15px;
  }
`;