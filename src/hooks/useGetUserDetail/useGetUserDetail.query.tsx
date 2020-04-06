import gql from 'graphql-tag';

export const useGetUserDetailQuery = gql`
  query getUserDetailQuery($login: String!) {
    user(login: $login) {
      id
      anyPinnableItems
      avatarUrl
      bio
      bioHTML
      company
      companyHTML
      email
      databaseId
      createdAt
      name
      login
      avatarUrl
      repositories(first: 10) {
        edges {
          node {
            id
          }
        }
        totalCount
      }
      repositoriesContributedTo {
        totalCount
      }
      gists(first: 10) {
        pageInfo {
          endCursor
          startCursor
        }
        totalCount
      }
      followers(first: 10) {
        totalCount
      }
    }
  }
`;
