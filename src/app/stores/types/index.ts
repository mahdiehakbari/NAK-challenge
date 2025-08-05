export interface IAuthState {
  accessToken: string | null;
  userName: string | null;
  setAuthData: (token: string, userName: string) => void;
  clearAuthData: () => void;
}
