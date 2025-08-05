import { useEffect, useState } from 'react';
import { Table, TableHeader, TableRow, TableCell } from '../styles/styles';
import type { IAttribute } from './types';
import { useFetchAttributes } from './hooks';
import { API_URL } from '../constants';

export const AttributesTable = () => {
  const [attributes, setAttributes] = useState<IAttribute[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { fetchAttributes } = useFetchAttributes(API_URL);

  useEffect(() => {
    const loadAttributes = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchAttributes();
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

    loadAttributes();
  }, [fetchAttributes]);

  if (loading) return <div>Loading attributes...</div>;
  if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;

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
