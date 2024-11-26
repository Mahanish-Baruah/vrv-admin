import { create } from "zustand";
import { db } from "../utils/firebaseConfig";
import { collection, getDocs } from "firebase/firestore/lite";
import { UserData, UserSnapshot } from "../types/types";

export type UsersState = {
  users: UserSnapshot[];
  loading: boolean;
  error: string | unknown | null;
  fetchUsers: () => Promise<void>;
};

const useUsersStore = create<UsersState>((set) => ({
  users: [],
  loading: false,
  error: null,
  fetchUsers: async () => {
    set({ loading: true, error: null });
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const fetchedData: UserSnapshot[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data() as UserData,
      }));
      set({ users: fetchedData, loading: false });
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        set({ error: error.message, loading: false });
      } else {
        set({ error: error, loading: false });
      }
    }
  },
}));

export default useUsersStore;
