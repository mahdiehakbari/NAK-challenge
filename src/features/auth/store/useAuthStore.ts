import { create } from 'zustand';
import type { IAuthState } from './types';

export const useAuthStore = create<IAuthState>((set) => ({
  token: null,
  isLoggedIn: false,
  login: (token) => set({ token, isLoggedIn: true }),
  logout: () => set({ token: null, isLoggedIn: false }),
}));
