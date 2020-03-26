export interface UserDetailType {
    id: string;
    avatarUrl: string;
    bio: string;
    bioHTML: string;
    email: string;
    createdAt: string;
    name: string;
    login: string;
    repositoriesTotalCount: string;
    repositoriesContributedTo: string;
    gists: string;
    followers: string;
    location: string
}

export interface UseGetUserDetailType {
    userDetail?: UserDetailType | null;
    loading: boolean;
}