import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import Spacing from '../../resources/Spacing';
import Typography from '../../resources/Typography';
import Radius from '../../resources/Radius';

export const styles = StyleSheet.create({
  openSettingsModal: {
    width: '70%',
    height: 150,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: Radius.l,
    padding: Spacing.m,
  },
  settingsModalButtonsWrapper: {
    marginTop: Spacing.l,
    paddingHorizontal: Spacing.m,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  settingsModalTitle: {
    ...Typography.label2,
  },
});
