export type UserType = {
  id: number;
  name: string;
  full_name: string;
  owner: {
    id: number;
    avatar_url: string;
    repos_url: string;
  };
  description: string;
};

export type Users = UserType[];

export type UserStateType = {
  data: Users;
  isLoading: boolean;
  error: null;
};
