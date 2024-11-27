import { create } from "zustand";
import { User } from "../types/types";
import userDB from "../db/userDB";

type StoreState = {
  users: User[];
  fetchUsers: () => Promise<void>;
  addUser: (user: Omit<User, "id">) => Promise<void>;
  updateUser: (id: number, updatedUser: Partial<User>) => Promise<void>;
  deleteUser: (id: number) => Promise<void>;
};

export const useUserStore = create<StoreState>()((set) => ({
  users: [],
  // Fetch all users from IndexedDB
  fetchUsers: async () => {
    const users = await userDB.getAllUsers();
    set({ users });
  },
  // Add a new user to IndexedDB
  addUser: async (user) => {
    const newUser = await userDB.addUser(user);
    set((state) => ({ users: [...state.users, newUser] }));
  },
  // Update a user in IndexedDB
  updateUser: async (id, updatedUser) => {
    const updatedUserData = await userDB.updateUser(id, updatedUser);
    if (updatedUserData) {
      set((state) => ({
        users: state.users.map((user) =>
          user.id === id ? updatedUserData : user,
        ),
      }));
    }
  },
  // Delete a user from IndexedDB
  deleteUser: async (id) => {
    const success = await userDB.deleteUser(id);
    if (success) {
      set((state) => ({
        users: state.users.filter((user) => user.id !== id),
      }));
    }
  },
}));
