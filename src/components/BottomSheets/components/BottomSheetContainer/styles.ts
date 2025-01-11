import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomSheet: {
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
  },
  hiddenContent: {
    position: 'absolute',
    bottom: -2000,
  },
});
