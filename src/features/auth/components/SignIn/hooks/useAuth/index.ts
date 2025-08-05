import type { TFormValues } from './types';

export const useLogin = (apiUrl: string) => {
  const login = async (
    data: TFormValues,
    onSetServerError: (error: string | null) => void,
  ): Promise<string | undefined> => {
    onSetServerError(null);

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        onSetServerError(errorData.message || 'Login failed');
        return;
      }

      const result = await response.json();
      return result.access_token;
    } catch {
      onSetServerError('Network error');
      return;
    }
  };

  return { login };
};
