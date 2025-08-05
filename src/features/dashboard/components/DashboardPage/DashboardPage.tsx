import { useAuthStore } from '../../../auth/store/useAuthStore';
import { MainDashboard } from './MainDashboard/MainDashboard';
import { SidebarMenu } from './SidebarMenu/SidebarMenu';
import { Container, MainContent, Card, Title, Text } from './style/styles';

const DashboardPage = () => {
  const userName = useAuthStore((state) => state.userName);

  return (
    <Container>
      <SidebarMenu userName={userName} />
      <MainDashboard userName={userName} />
    </Container>
  );
};

export default DashboardPage;
