import React, { useEffect, useState } from 'react';
import { Card } from 'semantic-ui-react';
import styled from 'styled-components';

import UserCard from './UserCard';
import { StickyHeader, Footer, LoadingScreen } from '../../components';
import { useUserSearch } from '../../hooks';

export const BodyWrapper = styled.div`
  background-color: #f2f2f2;
  padding-top: 20px;
  padding-left: 10%;
  padding-right: 10%;
`;

export const UserList: React.FunctionComponent = () => {
  const {
    users,
    usersIsLoading,
    searchQuery,
    getNext,
    getPrevious,
    hasNextPage,
    hasPreviousPage,
  } = useUserSearch();

  const [contextRef, setContextRef] = useState<HTMLElement | null>(null);
  const handleContextRef = (instance: HTMLElement | null) => setContextRef(instance);

  useEffect(() => {
    searchQuery('a');
    // eslint-disable-next-line
  }, []);

  const handleNext = () => {
    getNext();
  };

  const handleBack = () => {
    getPrevious();
  };

  const resultSelect = (query: string) => {
    searchQuery(query);
  };

  if (usersIsLoading) {
    return <LoadingScreen />;
  }

  return (
    <main ref={handleContextRef}>
      <StickyHeader
        contextRef={contextRef}
        resultSelect={resultSelect}
      />
      <BodyWrapper>
        <Card.Group doubling itemsPerRow={5}>
          {users ? users.map((user )=> <UserCard key={user.id} user={user} />): null}
        </Card.Group>
      </BodyWrapper>
      <Footer back={handleBack} hasNextPage={hasNextPage} hasPreviousPage={hasPreviousPage} next={handleNext} />
    </main>
  );
};
