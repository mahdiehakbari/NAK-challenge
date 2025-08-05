import { create } from 'zustand';
import type { IAuthState } from './types';

export const useAuthStore = create<IAuthState>((set) => ({
  accessToken: localStorage.getItem('accessToken'),
  userName: localStorage.getItem('userName'),
  setAuthData: (token, userName) => {
    localStorage.setItem('accessToken', token);
    localStorage.setItem('userName', userName);
    set({ accessToken: token, userName });
  },
  clearAuthData: () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userName');
    set({ accessToken: null, userName: null });
  },
}));
