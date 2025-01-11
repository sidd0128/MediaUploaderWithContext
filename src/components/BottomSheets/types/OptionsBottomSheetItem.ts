import Icon from '../../../types/Icon';

export default interface OptionsBottomSheetItem {
  icon?: Icon;
  title: string;
  description?: string;
  onPress: () => void;
  // eslint-disable-next-line semi
}
