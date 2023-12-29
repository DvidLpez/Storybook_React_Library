import styled from 'styled-components';
import { getTypeInfo } from './utils';

interface StyledInfoAppProps {
  type?: string;
}

export const StyledInfoapp = styled.div<StyledInfoAppProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${(pr) => getTypeInfo(pr.type)};
  color: white;
  vertical-align: middle;
  align-self: center;
  align-items: center;
  font-size: 12px;
  padding: 5px;
  p {
    margin: 0;
  }
`;
