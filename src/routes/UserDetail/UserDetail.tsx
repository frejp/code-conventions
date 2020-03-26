import React from 'react';
import styled from "styled-components";

import { UserDetailDesktop } from './UserDetailDesktop';
import { UserDetailMobile } from './UserDetailMobile';
import { useGetUserDetail } from '../../hooks';
import { LoadingScreen } from '../../components';

const HideForMobile = styled.div`
  @media (min-width: 679px) {
    display: none !important;
  }
`;

const HideForDesktop = styled.div`
  @media (max-width: 679px) {
    display: none !important;
  }
`;

interface Props {
  match: {
    params: {
      login: string;
    };
  };
}

export const UserDetail: React.FunctionComponent<Props> = ({
  match: {
    params: { login },
  },
}) => {
  const { userDetail, loading } = useGetUserDetail(login);

  if (loading) {
    return <LoadingScreen />;
  }

  if (!userDetail) {
    return <div>Cannot find userDetail</div>;
  }

  return (
    <div data-testid={`user-profile-${'login'}`}>
      <HideForDesktop>
        <UserDetailDesktop userDetail={userDetail} />
      </HideForDesktop>
      <HideForMobile>
        <UserDetailMobile userDetail={userDetail} />
      </HideForMobile>
    </div>
  );
};
