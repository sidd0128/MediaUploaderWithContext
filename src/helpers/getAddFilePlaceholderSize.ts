import { Dimensions } from 'react-native';
import Spacing from '../resources/Spacing';

const getAddFilePlaceholderSize = () => {
  const screenWidth = Dimensions.get('screen').width;
  const placeholderWidth = (screenWidth - 2 * Spacing.m - 2 * Spacing.s) / 3;
  const placeholderRatio = 0.715;
  const placeholderHeight = placeholderRatio * placeholderWidth;

  return {
    height: placeholderHeight,
    width: placeholderWidth,
  };
};

export default getAddFilePlaceholderSize;
