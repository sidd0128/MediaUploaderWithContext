import OptionsBottomSheetItem from './OptionsBottomSheetItem';

interface CommonProps {
  title: string;
  description?: string;
  onClose?: () => void;
}

export type OptionsBottomSheetProps =
  | (CommonProps & {
      variant: 'default';
      options: OptionsBottomSheetItem[];
    });
