import * as React from 'react';
import { Link } from 'react-router-dom';
import { Divider, Header, Container, Button } from 'semantic-ui-react';
import styled from 'styled-components';

import { UserCardDesktop } from './UserCardDesktop';
import { UserStatsDesktop } from './UserStatsDesktop';
import { UserDetailType } from '../../hooks';

interface Props {
  userDetail: UserDetailType;
}

const UserDetailWrapper = styled.div`
    display: flex;
    margin-left: 10%;
    width: 80%;
    margin-top: 2%;
`;

const UserCardWrapper = styled.div`
  flex: 1;
  margin-right: 5%;
  width: 40%;
  height: auto;
`;
const UserStatsWrapper = styled.div`
    flex: 1;
    width: 55%;
`;

export const UserDetailDesktop: React.FunctionComponent<Props> = ({ userDetail }) => {
  return (
    <UserDetailWrapper>
      <Divider />
      <UserCardWrapper>
        <UserCardDesktop userDetail={userDetail} />
      </UserCardWrapper>
      <UserStatsWrapper>
        <UserStatsDesktop userDetail={userDetail} />
        <Divider />
        <Header as="h2">Biography</Header>
        <Container>
          <p>{userDetail.bio ? userDetail.bio : 'User has no Biography'}</p>
        </Container>
        <Divider />
        <Button as={Link} name="Back" positive to="/">
          Back
        </Button>
      </UserStatsWrapper>
    </UserDetailWrapper>
  );
};
