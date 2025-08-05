import { useState } from 'react';
import { useAuthStore } from '../../../auth/store/useAuthStore';
import { LogoutModal } from './LogoutModal/LogoutModal';
import { MainDashboard } from './MainDashboard/MainDashboard';
import { SidebarMenu } from './SidebarMenu/SidebarMenu';
import { Container } from './style/styles';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const DashboardPage = () => {
  const { t } = useTranslation();
  const userName = useAuthStore((state) => state.userName);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const { clearAuthData } = useAuthStore.getState();

  const handleLogout = () => {
    clearAuthData();
    navigate('/login');
  };

  return (
    <Container>
      <SidebarMenu userName={userName} openModal={openModal} />
      <MainDashboard userName={userName} />
      <LogoutModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={handleLogout}
      >
        <p>{t('logout_modal_text')}</p>
      </LogoutModal>
    </Container>
  );
};

export default DashboardPage;
