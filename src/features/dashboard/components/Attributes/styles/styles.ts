import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 40px;
  background: #f8f8f8;
  width: 97%;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 24px;
`;

export const AttributeRow = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

export const FlexRow = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ActionButton = styled.button<{
  variant?: 'primary' | 'secondary';
}>`
  padding: 12px 20px;
  border-radius: 40px;
  border: none;
  cursor: pointer;
  background: ${({ variant }) => (variant === 'primary' ? 'black' : '#eee')};
  color: ${({ variant }) => (variant === 'primary' ? 'white' : 'black')};
  &:hover {
    opacity: 0.9;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 12px;
  overflow: hidden;
`;

export const TableHeader = styled.th`
  text-align: left;
  padding: 16px;
  background: #f1f1f1;
  font-weight: bold;
`;

export const TableRow = styled.tr`
  &:nth-of-type(odd) {
    background: #fafafa;
  }
`;

export const TableCell = styled.td`
  padding: 16px;
  border-bottom: 1px solid #eee;
`;
