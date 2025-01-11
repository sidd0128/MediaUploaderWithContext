import { StyleSheet } from 'react-native';
import colors from '../../../../constants/colors';
import Radius from '../../../../resources/Radius';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: colors.gray30,
    borderRadius: Radius.s,
    borderStyle: 'dashed',
    borderWidth: 1,
    justifyContent: 'center',
  },
  thumbnail: {
    borderRadius: Radius.s,
  },
});

export default styles;
