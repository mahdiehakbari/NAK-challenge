export interface ISidebarProps {
  userName: string | null;
  openModal: () => void;
  onSelect: (data: string) => void;
}
