export interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  children?: React.ReactNode;
}
