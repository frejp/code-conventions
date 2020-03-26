import * as React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { searchUsers_search_edges_node_User as UserNode } from '../../graphql';

interface Props {
  user: UserNode;
}

export const UserCard: React.FunctionComponent<Props> = ({ user }) => {
  return (
    <Card key={user.id} className="dangerously-override-border" data-testid="user-card" fluid>
      <Link data-testid={`user-card-${user.login}`} to={`/user/${user.login}`}>
        <Image alt="user-profile-image" src={user.avatarUrl} />
      </Link>
      <Card.Content>
        <Card.Header>
          <Link style={{ color: '#050506' }} to={`/user/${user.login}`}>
            {user.login}
          </Link>
        </Card.Header>
      </Card.Content>
    </Card>
  );
};

export default UserCard;
