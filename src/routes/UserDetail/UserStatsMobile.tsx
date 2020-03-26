import * as React from 'react';
import { Statistic } from 'semantic-ui-react';

import { UserDetailType } from '../../hooks';

interface Props {
  userDetail: UserDetailType;
}

export const UserStatsMobile: React.FunctionComponent<Props> = ({ userDetail }) => {
  return (
    <Statistic.Group size="mini">
      <Statistic>
        <Statistic.Value>{userDetail.repositoriesTotalCount}</Statistic.Value>
        <Statistic.Label>Repos</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>{userDetail.gists}</Statistic.Value>
        <Statistic.Label>Gists</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>{userDetail.followers}</Statistic.Value>
        <Statistic.Label>Followers</Statistic.Label>
      </Statistic>
    </Statistic.Group>
  );
};
