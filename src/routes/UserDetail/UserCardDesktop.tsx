import * as React from 'react';
import { Card, Image } from 'semantic-ui-react';

import { UserDetailType } from '../../hooks';

interface Props {
  userDetail: UserDetailType;
}
const formatDate = (dateString: string) => {
  return dateString.substring(0, dateString.indexOf('T'));
};

export const UserCardDesktop: React.FunctionComponent<Props> = ({ userDetail }) => {
  return (
    <Card fluid>
      <Image alt="user-profile-image" src={userDetail.avatarUrl} wrapped />
      <Card.Content>
        <Card.Header>{userDetail.login}</Card.Header>
        <Card.Meta>
          <span className="date">
            Joined in
            {userDetail.createdAt ? formatDate(userDetail.createdAt) : null}
          </span>
        </Card.Meta>
        <Card.Description>
          {userDetail.login} is from
          {userDetail.location}
        </Card.Description>
      </Card.Content>
    </Card>
  );
};
