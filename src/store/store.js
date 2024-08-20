import { create } from 'zustand';

export const useUserStore = create((set) => ({
  user: false,
  haveAccount: false,
  setUser: () => set((state) => ({ user: !state.user })),
  setHaveAccount: (value) => set((state) => ({ haveAccount: value })),
}));
