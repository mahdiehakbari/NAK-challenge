import { useEffect, useState } from 'react';
import { Table, TableHeader, TableRow, TableCell } from './styles/styles';
import Cookies from 'js-cookie';
import type { IAttribute } from './types';

const apiUrl = 'https://nak-interview.darkube.app/attributes';

export const AttributesTable = () => {
  const [attributes, setAttributes] = useState<IAttribute[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAttributes = async () => {
      setLoading(true);
      setError(null);

      try {
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

        setAttributes(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Unknown error');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchAttributes();
  }, []);

  if (loading) return <div>Loading attributes...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Table>
      <thead>
        <tr>
          <TableHeader>#</TableHeader>
          <TableHeader>Name</TableHeader>
          <TableHeader>Values</TableHeader>
        </tr>
      </thead>
      <tbody>
        {attributes.map((attr, index) => (
          <TableRow key={index}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{attr.name}</TableCell>
            <TableCell>{attr.values.join(', ')}</TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};
