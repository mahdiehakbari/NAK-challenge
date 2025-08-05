import { useState } from 'react';
import { AttributesTable } from './AttributesTable';
import { ActionButton, Container, FlexRow, Title } from './styles/styles';
import { AttributesForm } from './AttributesForm';

export const AttributePage = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <Container>
      <FlexRow>
        <Title>Attributes</Title>
        <ActionButton
          variant='primary'
          onClick={() => setShowForm(true)}
          disabled={showForm}
        >
          Add Attribute ＋
        </ActionButton>
      </FlexRow>

      {showForm ? <AttributesForm /> : <AttributesTable />}
    </Container>
  );
};
