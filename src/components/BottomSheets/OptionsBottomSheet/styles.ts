import { StyleSheet } from 'react-native';
import Typography from '../../../resources/Typography';
import Spacing from '../../../resources/Spacing';
import colors from '../../../constants/colors';

export default StyleSheet.create({
  header: {
    flexDirection: 'column',
  },
  headerTitleAndCloseButtonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 56,
  },
  title: {
    ...Typography.h3,
    flex: 1,
    marginHorizontal: Spacing.m,
  },
  description: {
    ...Typography.caption2,
    color: colors.gray40,
    marginHorizontal: Spacing.m,
  },
  closeButton: {
    marginEnd: Spacing.m,
  },
  optionsContainer: {
    marginHorizontal: Spacing.m,
  },
});
