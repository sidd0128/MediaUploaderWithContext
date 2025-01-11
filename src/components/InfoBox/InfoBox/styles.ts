import { StyleSheet } from 'react-native';
import Spacing from '../../../resources/Spacing';
import Radius from '../../../resources/Radius';
import Typography from '../../../resources/Typography';
import shadowStyle from '../../../helpers/shadowStyle';

const styles = StyleSheet.create({
  container: {
    ...shadowStyle,
    borderRadius: Radius.l,
    padding: Spacing.m,
  },
  titleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    ...Typography.label1,
    flex: 1,
    marginStart: Spacing.s,
  },
  message: {
    ...Typography.callout,
    marginTop: Spacing.xs,
  },
  buttonContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: Spacing.m,
  },
  closeButtonContainer: {
    alignItems: 'center',
    end: 0,
    height: 48,
    justifyContent: 'center',
    position: 'absolute',
    width: 48,
  },
});

export default styles;
