import { useAuthStore } from '../../../../store/useAuthStore';
import type { TFormValues } from './types';

export const useSignUp = (apiUrl: string) => {
  const setAuthData = useAuthStore((state) => state.setAuthData);

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

      if (!response.ok) {
        const errorData = await response.json();
        onSetServerError(errorData.message || 'Signup failed');
        return false;
      }

      const result = await response.json();
      setAuthData(result.access_token, result.user_name);
      return true;
    } catch {
      onSetServerError('Network error');
      return false;
    }
  };

  return { signUp };
};
