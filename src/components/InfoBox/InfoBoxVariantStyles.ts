import colors from '../../constants/colors';
import InfoBoxPalette from './types/InfoBoxPalette';

export const InfoBoxVariantStyles: InfoBoxPalette = {
  error: {
    backgroundColor: colors.errorBackground,
    svgIconName: 'warningAngleFilled',
  },
  info: {
    backgroundColor: colors.neutralBackground,
    svgIconName: 'infoCircle',
  },
  success: {
    backgroundColor: colors.successBackground,
    svgIconName: 'checkedFill',
  },
  warning: {
    backgroundColor: colors.warningBackground,
    svgIconName: 'warning_circle',
  },
};
