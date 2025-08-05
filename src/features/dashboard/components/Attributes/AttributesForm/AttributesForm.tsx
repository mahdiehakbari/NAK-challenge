import { useState } from 'react';
import {
  Container,
  Title,
  AttributeRow,
  Input,
  ActionButton,
  AttributeColumn,
  AddButton,
} from '../styles/styles';
import { useSaveAttribute } from './hooks/useSaveAttribute';
import { API_URL } from '../constants';

export const AttributesForm = () => {
  const [attribute, setAttribute] = useState<{
    name: string;
    values: string[];
  }>({
    name: '',
    values: [''],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { saveAttribute } = useSaveAttribute(API_URL);
  const handleNameChange = (value: string) => {
    setAttribute((prev) => ({ ...prev, name: value }));
  };

  const handleValueChange = (index: number, value: string) => {
    const newValues = [...attribute.values];
    newValues[index] = value;
    setAttribute((prev) => ({ ...prev, values: newValues }));
  };

  const addValue = () => {
    setAttribute((prev) => ({ ...prev, values: [...prev.values, ''] }));
  };

  const handleSave = async () => {
    setLoading(true);
    setError(null);
    try {
      await saveAttribute(attribute);
      // reset form if needed
      setAttribute({ name: '', values: [''] });
    } catch (err) {
      if (err instanceof Error) setError(err.message);
      else setError('Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setAttribute({ name: '', values: [''] });
  };
  if (loading) return <div>Loading attributes...</div>;
  if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;
  return (
    <Container>
      <Title>Attributes</Title>

      <AttributeRow>
        <Input
          placeholder='Name'
          value={attribute.name}
          onChange={(e) => handleNameChange(e.target.value)}
        />

        <AttributeColumn>
          {attribute.values.map((val, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '8px',
              }}
            >
              <Input
                placeholder='Value'
                value={val}
                onChange={(e) => handleValueChange(index, e.target.value)}
              />
              {index === attribute.values.length - 1 && (
                <AddButton onClick={addValue} type='button'>
                  ＋
                </AddButton>
              )}
            </div>
          ))}
        </AttributeColumn>
      </AttributeRow>

      <div style={{ display: 'flex', gap: '12px', marginTop: '32px' }}>
        <ActionButton variant='secondary' onClick={handleCancel} type='button'>
          Cancel
        </ActionButton>
        <ActionButton variant='primary' onClick={handleSave} type='button'>
          Save
        </ActionButton>
      </div>
    </Container>
  );
};
