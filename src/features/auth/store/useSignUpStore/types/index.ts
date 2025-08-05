export interface ISignUpState {
  loading: boolean;
  serverError: string | null;
  setLoading: (loading: boolean) => void;
  setServerError: (error: string | null) => void;
}
