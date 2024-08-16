import { create } from 'zustand';

export const useUserStore = create((set) => ({
  user: true,
  setUser: () => set((state) => ({ user: !state.user })),
}));
