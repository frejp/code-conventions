import * as React from 'react';
import { Statistic } from 'semantic-ui-react';
import styled from 'styled-components';

import { UserDetailType } from '../../hooks';

interface Props {
  userDetail: UserDetailType;
}

export const Wrapper = styled.div`
  margin: auto;
  width: fit-content;
`;

export const UserStatsDesktop: React.FunctionComponent<Props> = ({ userDetail }) => {
  return (
    <Wrapper>
      <Statistic.Group size="small">
        <Statistic>
          <Statistic.Value>{userDetail.repositoriesTotalCount}</Statistic.Value>
          <Statistic.Label>Public Repos</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>{userDetail.gists}</Statistic.Value>
          <Statistic.Label>Public Gists</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>{userDetail.followers}</Statistic.Value>
          <Statistic.Label>Followers</Statistic.Label>
        </Statistic>
      </Statistic.Group>
    </Wrapper>
  );
};
