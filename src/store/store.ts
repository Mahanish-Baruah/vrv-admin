import { create } from 'zustand';

// Define the shape of your state
interface CounterState {
  count: number;
  increase: () => void;
  decrease: () => void;
}

// Create the store
const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
}));

export default useCounterStore;
