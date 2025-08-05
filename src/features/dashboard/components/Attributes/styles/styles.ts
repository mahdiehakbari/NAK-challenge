import styled from '@emotion/styled';
import colors from '../../../../../styles/colors';

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
export const AttributeColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 40px;
  width: 400px;
  height: 20px;
  margin-bottom: 16px;
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
  background: ${colors.primary};
  color: white;
  &:hover {
    opacity: 0.9;
  }
`;

export const AddButton = styled.button<{
  variant?: 'primary' | 'secondary';
}>`
  width: 70px;
  height: 70px;
  padding: 12px 20px;
  border-radius: 40px;
  border: 1px solid ${colors.primary};
  cursor: pointer;
  background: #eee;
  color: ${colors.primary};
  &:hover {
    opacity: 0.9;
  }
  margin-top: 10px;
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
