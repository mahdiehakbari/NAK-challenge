import { useState } from 'react';
import {
  Container,
  Title,
  AttributeRow,
  Input,
  ActionButton,
  AttributeColumn,
  AddButton,
} from './styles/styles';

export const AttributesForm = () => {
  const apiUrl = 'https://nak-interview.darkube.app/attributes';
  const [attribute, setAttribute] = useState<{
    name: string;
    values: string[];
  }>({
    name: '',
    values: [''],
  });

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
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(attribute),
      });

      if (response.ok) {
        console.log('Attribute created successfully!');
      } else {
        const errorData = await response.json();
        console.error('Failed to create attribute:', errorData);
      }
    } catch (error) {
      console.error('Error while creating attribute:', error);
    }
  };

  const handleCancel = () => {
    setAttribute({ name: '', values: [''] });
  };
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
            <>
              <Input
                key={index}
                placeholder='Value'
                value={val}
                onChange={(e) => handleValueChange(index, e.target.value)}
              />
              {index === attribute.values.length - 1 && (
                <AddButton onClick={addValue}>＋</AddButton>
              )}
            </>
          ))}
        </AttributeColumn>
      </AttributeRow>

      <div style={{ display: 'flex', gap: '12px', marginTop: '32px' }}>
        <ActionButton variant='secondary' onClick={handleCancel}>
          Cancel
        </ActionButton>
        <ActionButton variant='primary' onClick={handleSave}>
          Save
        </ActionButton>
      </div>
    </Container>
  );
};
