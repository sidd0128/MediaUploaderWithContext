import InfoBoxVariant from './InfoBoxVariant';

interface Props {
  title: string;
  message: string;
  hasCloseButton?: boolean;
  onClose?: () => void;
  isVisible: boolean;
  isSelfDisappearing?: boolean;
  button?: {
    label: string;
    onPress: () => void;
  };
}

type InfoBoxProps =
  | (Props & {
      variant: InfoBoxVariant.INFO;
    })
  | (Props & {
      variant: InfoBoxVariant.SUCCESS;
    })
  | (Props & {
      variant: InfoBoxVariant.WARNING;
    })
  | (Props & {
      variant: InfoBoxVariant.ERROR;
    });

export default InfoBoxProps;
