import { create } from 'zustand';
import type { IAuthState } from './types';

export const useAuthStore = create<IAuthState>((set) => ({
  accessToken: null,
  userName: null,
  setAuthData: (token, userName) => set({ accessToken: token, userName }),
  clearAuthData: () => set({ accessToken: null, userName: null }),
}));
