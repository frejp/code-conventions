import * as React from 'react';
import { Icon, Button } from 'semantic-ui-react';
import styled from 'styled-components';

const FlexWrapper = styled.footer`
  display: flex;
  margin: calc(50% - 130px);
  width: 260px;
  height: 50px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const FlexItem = styled.div`
  flex: 1;
`;

interface Props {
  back: () => void;
  next: () => void;
  hasNextPage: boolean|null;
  hasPreviousPage: boolean|null;
}

export const Footer: React.FunctionComponent<Props> = ({ back, next, hasNextPage, hasPreviousPage }) => {
  return (
    <FlexWrapper>
      <FlexItem>
        <Button disabled={!hasPreviousPage} icon labelPosition="left" onClick={back} size="large">
          Back
          <Icon name="angle left" />
        </Button>
      </FlexItem>
      <FlexItem>
        <Button disabled={!hasNextPage} icon labelPosition="right" onClick={next} size="large">
          Next
          <Icon name="angle right" />
        </Button>
      </FlexItem>
    </FlexWrapper>
  );
};

export default Footer;
