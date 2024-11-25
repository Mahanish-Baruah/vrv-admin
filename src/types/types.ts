export enum Roles {
  admin = "admin",
  manager = "manager",
  staff = "staff",
}

export type UserData = {
  email: string;
  name: string;
  password: string;
  role: Roles;
  uid: string;
};

export type UserSnapshot = {
  id: string;
  data: UserData;
};

export type UsersState = {
  data: UserSnapshot[];
  loading: boolean;
  error: string | unknown | null;
  fetchData: () => Promise<void>;
};
