import { create } from 'zustand';

export const useUserStore = create((set) => ({
  user: false,
  setUser: () => set((state) => ({ user: !state.user })),
}));
