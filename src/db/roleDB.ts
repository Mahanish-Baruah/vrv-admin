import { openDB } from "idb";
import { Role } from "../types/types";

// Open or create the database
const dbPromise = openDB("roleDB", 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains("roles")) {
      db.createObjectStore("roles", { keyPath: "id", autoIncrement: true });
    }
  },
});

// CRUD Operations
export const roleDB = {
  // Get all roles
  async getAllRoles(): Promise<Role[]> {
    const db = await dbPromise;
    return db.getAll("roles");
  },

  // Add a new role
  async addRole(role: Omit<Role, "id">): Promise<Role> {
    const db = await dbPromise;
    const id = await db.add("roles", role);
    return { id, ...role };
  },

  // Update an existing role
  async updateRole(
    id: number,
    updatedRole: Partial<Role>,
  ): Promise<Role | null> {
    const db = await dbPromise;
    const role = await db.get("roles", id);
    if (!role) return null;

    const updated = { ...role, ...updatedRole };
    await db.put("roles", updated);
    return updated;
  },

  // Delete a role
  async deleteRole(id: number): Promise<boolean> {
    const db = await dbPromise;
    const role = await db.get("roles", id);
    if (!role) return false;

    await db.delete("roles", id);
    return true;
  },
};
