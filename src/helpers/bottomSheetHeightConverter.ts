import { Dimensions } from 'react-native';

const currentScreenWidth = Dimensions.get('window').width;

const widthDesignReference = 375;

export const bottomSheetHeightConverter = (bottomSheetHeight: number) => {
  const heightScaleResult = (currentScreenWidth / widthDesignReference) * bottomSheetHeight;
  const heightDifference = heightScaleResult - bottomSheetHeight;
  const widerScreensDiffAdjustment = 1.1;
  if (currentScreenWidth > widthDesignReference) {
    return (bottomSheetHeight - heightDifference) * widerScreensDiffAdjustment;
  }
  if (currentScreenWidth < widthDesignReference) {
    return bottomSheetHeight + heightDifference;
  }
  return bottomSheetHeight;
};
