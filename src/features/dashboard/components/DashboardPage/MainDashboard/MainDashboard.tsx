import { Card, MainContent, Title, Text } from '../style/styles';
import type { IDashboardProps } from '../types';

export const MainDashboard = ({ userName }: IDashboardProps) => (
  <MainContent>
    <Card>
      <Title>
        Hello, {userName}
        <span role='img' aria-label='waving hand'>
          👋
        </span>
      </Title>
      <Text>I'm very happy you are here,</Text>
      <Text noMargin>
        I hope you find this dashboard easy and useful to use{' '}
        <span role='img' aria-label='smiling face with smiling eyes'>
          😊
        </span>
      </Text>
    </Card>
  </MainContent>
);
