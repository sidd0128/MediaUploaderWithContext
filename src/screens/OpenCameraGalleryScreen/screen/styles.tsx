import { StyleSheet } from 'react-native';
import Spacing from '../../../resources/Spacing';
import colors from '../../../constants/colors';
import Typography from '../../../resources/Typography';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    marginHorizontal: Spacing.m,
  },
  addFileTextsContainer: {
    flexDirection: 'row',
    marginVertical: Spacing.m,
  },
  addFilesLabel: {
    ...Typography.label2,
    flex: 1,
  },
  addFilesFileSizeLimitText: {
    ...Typography.caption2,
    color: colors.gray40,
  },
  buttonContainer: {
    bottom: 0,
    end: 0,
    paddingBottom: Spacing.m,
    paddingHorizontal: Spacing.m,
    position: 'absolute',
    backgroundColor: colors.white,
    start: 0,
  },
});

export default styles;
