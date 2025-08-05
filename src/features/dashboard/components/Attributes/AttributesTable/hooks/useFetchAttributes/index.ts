import Cookies from 'js-cookie';

export const useFetchAttributes = (apiUrl: string) => {
  const fetchAttributes = async () => {
    const token = Cookies.get('accessToken');

    if (!token) {
      throw new Error('Authentication token not found');
    }

    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error(`Error fetching attributes: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  };

  return { fetchAttributes };
};
