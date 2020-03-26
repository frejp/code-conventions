import * as React from 'react';
import { Link } from 'react-router-dom';
import { Divider, Button } from 'semantic-ui-react';

import { UserStatsMobile } from './UserStatsMobile';
import { UserCardMobile } from './UserCardMobile';
import { UserDetailType } from '../../hooks';
import styled from 'styled-components';

interface Props {
  userDetail: UserDetailType;
}

export const UserDetailWrapper = styled.div`
  margin-left: 10%;
  width: 80%;
  margin-top: 2%;
  margin-bottom: 10%;
`;

export const UserStatsWrapper = styled.div`
   margin: auto;
   width: fit-content;
   paddingTop: 20px;
`;

export const UserDetailMobile: React.FunctionComponent<Props> = ({ userDetail }) => {
  return (
    <UserDetailWrapper>
      <UserStatsWrapper>
        <UserStatsMobile userDetail={userDetail} />
      </UserStatsWrapper>
      <Divider />
      <UserCardMobile userDetail={userDetail} />
      <Button as={Link} name="Back" positive to="/">
        Back
      </Button>
    </UserDetailWrapper>
  );
};
