import { create } from "zustand";
import { RoleData, RoleSnapshot } from "../types/types";
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../utils/firebaseConfig";

type RolesState = {
  roles: RoleSnapshot[];
  loading: boolean;
  error: string | unknown | null;
  fetchRoles: () => Promise<void>;
};

const useRolesStore = create<RolesState>((set) => ({
  roles: [],
  loading: false,
  error: null,
  fetchRoles: async () => {
    set({ loading: true, error: null });
    try {
      const querySnapshot = await getDocs(collection(db, "roles"));
      const fetchedData: RoleSnapshot[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data() as RoleData,
      }));
      set({ roles: fetchedData, loading: false });
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

export default useRolesStore;
