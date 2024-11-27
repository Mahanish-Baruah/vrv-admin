import { openDB } from "idb";
import { User } from "../types/types";

// Open or create the database
const dbPromise = openDB("userDB", 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains("users")) {
      db.createObjectStore("users", { keyPath: "id", autoIncrement: true });
    }
  },
});

const userDB = {
  // Get all users
  async getAllUsers(): Promise<User[]> {
    const db = await dbPromise;
    return db.getAll("users");
  },

  // Add a new user
  async addUser(user: Omit<User, "id">): Promise<User> {
    const db = await dbPromise;
    const id = await db.add("users", user); // Automatically generates an ID
    return { id, ...user };
  },

  // Update an existing user
  async updateUser(
    id: number,
    updatedUser: Partial<User>,
  ): Promise<User | null> {
    const db = await dbPromise;
    const user = await db.get("users", id);
    if (!user) return null;

    const updated = { ...user, ...updatedUser };
    console.log("updated user: ", updated);
    await db.put("users", updated);
    return updated;
  },

  // Delete a user
  async deleteUser(id: number): Promise<boolean> {
    const db = await dbPromise;
    const user = await db.get("users", id);
    if (!user) return false;

    await db.delete("users", id);
    return true;
  },
};

export default userDB;
