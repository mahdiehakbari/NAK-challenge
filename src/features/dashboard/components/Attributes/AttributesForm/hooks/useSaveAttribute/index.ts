export const useSaveAttribute = (apiUrl: string) => {
  const saveAttribute = async (attribute: {
    name: string;
    values: string[];
  }) => {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(attribute),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to create attribute');
    }
  };

  return { saveAttribute };
};
