import { useState } from 'react';
import {
  Container,
  Title,
  AttributeRow,
  Input,
  ActionButton,
} from './styles/styles';

export const AttributesForm = () => {
  const [attributes, setAttributes] = useState([{ name: '', value: '' }]);

  const handleChange = (
    index: number,
    field: 'name' | 'value',
    value: string,
  ) => {
    const newAttributes = [...attributes];
    newAttributes[index][field] = value;
    setAttributes(newAttributes);
  };

  const addRow = () => {
    setAttributes([...attributes, { name: '', value: '' }]);
  };

  const handleSave = () => {
    console.log('Saved Attributes:', attributes);
  };

  return (
    <Container>
      <Title>Attributes</Title>

      {attributes.map((attr, index) => (
        <AttributeRow key={index}>
          <Input
            placeholder='Name'
            value={attr.name}
            onChange={(e) => handleChange(index, 'name', e.target.value)}
          />
          <Input
            placeholder='Value'
            value={attr.value}
            onChange={(e) => handleChange(index, 'value', e.target.value)}
          />
          {index === attributes.length - 1 && (
            <ActionButton onClick={addRow}>＋</ActionButton>
          )}
        </AttributeRow>
      ))}

      <div style={{ display: 'flex', gap: '12px', marginTop: '32px' }}>
        <ActionButton variant='secondary'>Cancel</ActionButton>
        <ActionButton variant='primary' onClick={handleSave}>
          Save
        </ActionButton>
      </div>
    </Container>
  );
};
