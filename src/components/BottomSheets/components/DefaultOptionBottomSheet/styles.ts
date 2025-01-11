import { StyleSheet } from 'react-native';
import colors from '../../../../constants/colors';
import Spacing from '../../../../resources/Spacing';
import Typography from '../../../../resources/Typography';

export default StyleSheet.create({
  optionContainer: {
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  optionContentContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 64,
  },
  optionIconContainer: {
    marginStart: Spacing.xs,
  },
  optionTitleAndDescriptionContainer: {
    marginStart: Spacing.s,
  },
  optionTitle: {
    ...Typography.label2,
    marginEnd: Spacing.xl,
  },
  optionDescription: {
    ...Typography.caption2,
    color: colors.gray40,
    marginEnd: Spacing.xl,
    marginTop: Spacing.xs,
  },
});
