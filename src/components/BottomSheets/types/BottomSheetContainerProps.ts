import { ReactNode } from 'react';

export default interface BottomSheetContainerProps {
  children: ReactNode;
  onClose?: () => void;
  // eslint-disable-next-line semi
}
