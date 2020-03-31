import { useQuery } from 'react-apollo';

import { useGetUserDetailQuery } from './useGetUserDetail.query';
import { getUserDetailQuery as UserDetailNode } from '../../graphql';
import { UserDetailType, UseGetUserDetailType } from './useGetuserDetail.types';

const emptyUserDetail = {
  id: '',
  avatarUrl: '',
  bio: '',
  bioHTML: '',
  email: '',
  createdAt: '',
  name: '',
  login: '',
  location: '',
};

const mapDataToUserDetail = (data: UserDetailNode): UserDetailType | undefined => {
  if (!data?.user) {
    return undefined;
  }

  const userDataWithNoNullProperties = Object.entries(data.user).reduce((a, [k, v]) => (v === null ? a : { ...a, [k]: v }), {});

  const userDetail = {
    ...emptyUserDetail,
    ...userDataWithNoNullProperties,
    repositoriesTotalCount: data.user.repositories?.totalCount?.toString(10),
    repositoriesContributedTo: data.user.repositoriesContributedTo?.totalCount?.toString(10),
    gists: data.user.gists?.totalCount?.toString(10),
    followers: data.user.followers?.totalCount?.toString(10),
  };

  return userDetail;
};

export const useGetUserDetail = (login: string): UseGetUserDetailType => {
  const { loading, data } = useQuery(useGetUserDetailQuery, {
    variables: {
      login,
    },
  });

  const userDetail = mapDataToUserDetail(data);

  return {
    userDetail,
    loading,
  };
};
