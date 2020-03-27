import * as React from 'react';
import { Sticky, Icon, Divider, Search, SearchProps } from 'semantic-ui-react';
import styled from 'styled-components';
import _ from 'lodash';
import { useState } from 'react';

import { useUserSearch } from '../../hooks';

interface Props {
  contextRef: any;
  resultSelect: (result: string) => void
}

export const Wrapper = styled.header`
  width: 100%;
  height: 90px;
`;

export const FlexWrapper = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  padding-left: 10%;
  padding-right: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StickyHeader: React.FunctionComponent<Props> = ({ contextRef, resultSelect }) => {
  const { usersIsLoading, users, searchQuery } = useUserSearch();

  const searchResultTitles = users?.map(user => ({title: user.login}))
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (event: React.MouseEvent<HTMLElement, MouseEvent>, data: SearchProps) => {
    const searchString = data.value as string
    setSearchInput(searchString);
    searchQuery(searchString);
  };

  const handleResultSelect = (e:React.MouseEvent<HTMLDivElement, MouseEvent>, { result }: { result:any}) => {
    setSearchInput(result.title);
    resultSelect(result.title);
  };

  return (
    <Wrapper>
      <Sticky context={contextRef}>
        <Wrapper>
          <FlexWrapper>
            <div>
              <Search
                loading={usersIsLoading}
                onResultSelect={handleResultSelect}
                onSearchChange={_.debounce(handleSearch, 5000, {
                  leading: true,
                })}
                results={searchResultTitles}
                size="large"
                value={searchInput}
              />
            </div>
            <div>
              <Icon name="github square" size="huge" />
            </div>
          </FlexWrapper>
          <Divider fitted />
        </Wrapper>
      </Sticky>
    </Wrapper>
  );
};
