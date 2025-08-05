import { useState } from 'react';
import { useAuthStore } from '../../../auth/store/useAuthStore';
import { LogoutModal } from './LogoutModal/LogoutModal';
import { MainDashboard } from './MainDashboard/MainDashboard';
import { SidebarMenu } from './SidebarMenu/SidebarMenu';
import { Container } from './style/styles';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AttributePage } from '../Attributes/AttributesPage';

const DashboardPage = () => {
  const { t } = useTranslation();
  const userName = useAuthStore((state) => state.userName);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState('dashboard');

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
      <SidebarMenu
        userName={userName}
        openModal={openModal}
        onSelect={setPage}
      />
      {page === 'dashboard' && <MainDashboard userName={userName} />}
      {page === 'attributes' && <AttributePage />}

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
