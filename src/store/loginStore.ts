import { create } from "zustand";
import { UserData } from "../types/types";

type LoginState = {
  user: UserData | null;
  loading: boolean;
  error: string | unknown | null;
  fetchData: () => Promise<void>;
};

const useUsersStore = create<LoginState>((set) => ({
  user: null,
  loading: false,
  error: null,
  fetchData: async () => {
    set({ loading: true, error: null });
    try {
      //   console.log("db: ", db);
      //   const querySnapshot = await getDocs(collection(db, "users"));
      //   console.log("querySnapshot: ", querySnapshot);
      //   const fetchedData: UserSnapshot[] = querySnapshot.docs.map((doc) => ({
      //     id: doc.id,
      //     data: doc.data() as UserData,
      //   }));
      //   console.log(fetchedData);
      //   set({ user: fetchedData.data, loading: false });
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
