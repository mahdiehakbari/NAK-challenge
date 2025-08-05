export type TFormValues = {
  userName: string;
  password: string;
};

export interface UseLoginReturn {
  login: (
    data: TFormValues,
    setError: (
      name: keyof TFormValues,
      error: { type: string; message: string },
    ) => void,
  ) => Promise<void>;
  serverError: string | null;
  loading: boolean;
}
