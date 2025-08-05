import { create } from 'zustand';
import type { ISignUpState } from './types';

export const useSignUpStore = create<ISignUpState>((set) => ({
  loading: false,
  serverError: null,
  setLoading: (loading) => set({ loading }),
  setServerError: (error) => set({ serverError: error }),
}));
