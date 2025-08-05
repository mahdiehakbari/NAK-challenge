export type TFormValues = {
  userName: string;
  password: string;
};

export interface IInputProps {
  hasError: boolean;
}

export interface IInputWrapperProps {
  extraMargin?: boolean;
}
