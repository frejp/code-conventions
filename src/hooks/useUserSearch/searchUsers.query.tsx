import gql from 'graphql-tag';

export const searchUsersQuery = gql`
  query searchUsers($query: String!, $after: String) {
    search(query: $query, type: USER, first: 30, after: $after) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        node {
          ... on User {
            id
            email
            login
            avatarUrl
            bio
            name
          }
        }
      }
    }
  }
`;
