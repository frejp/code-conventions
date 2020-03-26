import { useLazyQuery } from 'react-apollo';
import { useEffect, useState } from 'react';

import { searchUsersQuery } from './searchUsers.query';
import {
  searchUsers as SearchUsers,
  searchUsers_search_edges as Edge,
  searchUsers_search_edges_node_User as UserNode
} from '../../graphql';

interface PageInfo {
  startCursor: string|null
  endCursor: string|null
  hasNextPage: boolean|null
  hasPreviousPage: boolean|null
}

interface SearchVariables {
  query: string
  before?: string|null
  after?: string|null
}

const mapDataToUsers = (searchUsers: SearchUsers): UserNode[] | undefined => {
  if (!searchUsers?.search?.edges) {
    return undefined;
  }
  const edges = searchUsers.search.edges.filter(function (edge) {
    return edge != null;
  }) as Edge[];
  const userEdges = edges.filter((edge) => (edge.node != null && edge.node.__typename === "User"));
  const userNodes = userEdges.map(edge => edge.node) as UserNode[];
  return userNodes;
};

export const useUserSearch = () => {
  const [pageInfo, setPageInfo] = useState<PageInfo>({
    startCursor: null,
    endCursor: null,
    hasNextPage: null,
    hasPreviousPage: null,
  });
  const [query, setQuery] = useState<string|null>(null);
  const [searchForUsers, { loading, data }] = useLazyQuery(searchUsersQuery);

  const pageInfoFromData = data?.search?.pageInfo

  useEffect(() => {
    if (pageInfoFromData) {
      setPageInfo(pageInfoFromData);
    }
  }, [pageInfoFromData]);

  const performSearch = (variables: SearchVariables) => {
    searchForUsers({
      variables,
    });
  };

  const searchQuery = (queryParam: string) => {
    setQuery(queryParam);
    performSearch({
      query: queryParam,
      after: null,
    });
  };


  const getPrevious = () => {
    const variables = {
      query: query as string,
      before: pageInfo.startCursor,
    };
    performSearch(variables);
  };

  const getNext = () => {
    const variables = {
      query: query as string,
      after: pageInfo.endCursor,
    };
    performSearch(variables);
  };

  const users = mapDataToUsers(data);

  return {
    getNext,
    getPrevious,
    searchQuery,
    pageInfo,
    users,
    usersIsLoading: loading,
    hasNextPage: pageInfo.hasNextPage,
    hasPreviousPage: pageInfo.hasPreviousPage,
  };
};
