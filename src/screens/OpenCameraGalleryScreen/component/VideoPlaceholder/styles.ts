import { StyleSheet } from 'react-native';
import colors from '../../../../constants/colors';
import Radius from '../../../../resources/Radius';
import Typography from '../../../../resources/Typography';
import Spacing from '../../../../resources/Spacing';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.gray40,
    borderRadius: Radius.s,
    justifyContent: 'center',
  },
  text: {
    ...Typography.caption2,
    color: colors.white,
    marginTop: Spacing.s,
    textAlign: 'center',
  },
});
export default styles;
