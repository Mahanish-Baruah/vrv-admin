import { create } from "zustand";
import { Role } from "../types/types";
import { roleDB } from "../db/roleDB";

type RoleStoreState = {
  roles: Role[];
  fetchRoles: () => Promise<void>;
  addRole: (role: Omit<Role, "id">) => Promise<void>;
  updateRole: (id: number, updatedRole: Partial<Role>) => Promise<void>;
  deleteRole: (id: number) => Promise<void>;
};

export const useRoleStore = create<RoleStoreState>()((set) => ({
  roles: [],
  // Fetch all roles
  fetchRoles: async () => {
    const roles = await roleDB.getAllRoles();
    set({ roles });
  },
  // Add a new role
  addRole: async (role) => {
    const newRole = await roleDB.addRole(role);
    set((state) => ({ roles: [...state.roles, newRole] }));
  },
  // Update a role
  updateRole: async (id, updatedRole) => {
    const updatedRoleData = await roleDB.updateRole(id, updatedRole);
    if (updatedRoleData) {
      set((state) => ({
        roles: state.roles.map((role) =>
          role.id === id ? updatedRoleData : role,
        ),
      }));
    }
  },
  // Delete a role
  deleteRole: async (id) => {
    const success = await roleDB.deleteRole(id);
    if (success) {
      set((state) => ({
        roles: state.roles.filter((role) => role.id !== id),
      }));
    }
  },
}));
