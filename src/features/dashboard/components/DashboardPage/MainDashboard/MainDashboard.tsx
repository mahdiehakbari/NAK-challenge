import { useTranslation } from 'react-i18next';
import { Card, MainContent, Title, Text } from '../style/styles';
import type { IDashboardProps } from './types';

export const MainDashboard = ({ userName }: IDashboardProps) => {
  const { t } = useTranslation();
  return (
    <MainContent>
      <Card>
        <Title>
          Hello, {userName}
          <span role='img' aria-label='waving hand'>
            👋
          </span>
        </Title>
        <Text>{t('happy')}</Text>
        <Text noMargin>
          {t('hope')}
          <span role='img' aria-label='smiling face with smiling eyes'>
            😊
          </span>
        </Text>
      </Card>
    </MainContent>
  );
};
