import type { TFormValues } from './types';

export const useSignUp = (apiUrl: string) => {
  const signUp = async (
    data: TFormValues,
    onSetServerError: (error: string | null) => void,
  ): Promise<boolean> => {
    onSetServerError(null);

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.status === 201) {
        return true;
      } else {
        const errorData = await response.json();
        onSetServerError(errorData.message || 'Registration failed');
        return false;
      }
    } catch {
      onSetServerError('Network error');
      return false;
    }
  };

  return { signUp };
};
