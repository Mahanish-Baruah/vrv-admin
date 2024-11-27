export enum RoleEnum {
  admin = "admin",
  manager = "manager",
  staff = "staff",
}

export type User = {
  id: IDBValidKey;
  name: string;
  email: string;
  password: string;
  role: RoleEnum;
};

export type Role = {
  id: IDBValidKey;
  name: RoleEnum;
  permissions: string[];
};
