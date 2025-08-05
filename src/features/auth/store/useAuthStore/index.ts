import { create } from 'zustand';
import Cookies from 'js-cookie';
import type { IAuthState } from './types';

export const useAuthStore = create<IAuthState>((set) => ({
  accessToken: Cookies.get('accessToken') || null,
  userName: Cookies.get('userName') || null,

  setAuthData: (token, userName) => {
    Cookies.set('accessToken', token, { expires: 7 });
    Cookies.set('userName', userName, { expires: 7 });
    set({ accessToken: token, userName });
  },

  clearAuthData: () => {
    Cookies.remove('accessToken');
    Cookies.remove('userName');
    set({ accessToken: null, userName: null });
  },
}));
