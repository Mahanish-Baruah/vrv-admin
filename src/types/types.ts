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

export type RoleData = {
  id: string;
  permissions: string[];
};

export type RoleSnapshot = {
  id: string;
  data: RoleData;
};
