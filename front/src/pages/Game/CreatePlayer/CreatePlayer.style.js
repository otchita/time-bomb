import styled from 'styled-components';
import { getSpacing } from '../../../helpers/stylesheet';

export const CreatePlayerContainer = styled.form`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & :not(:last-child) {
    margin-right: ${getSpacing(4)};
  }
`;
