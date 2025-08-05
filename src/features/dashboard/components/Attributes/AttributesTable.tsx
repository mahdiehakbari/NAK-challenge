import { Table, TableHeader, TableRow, TableCell } from './styles/styles';

const sampleAttributes = [{ name: 'Size', values: 'Large, Medium, X-Large' }];

export const AttributesTable = () => {
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
        {sampleAttributes.map((attr, index) => (
          <TableRow key={index}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{attr.name}</TableCell>
            <TableCell>{attr.values}</TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};
