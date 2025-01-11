import React, {FC} from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import Modal from 'react-native-modal';
import { openSettings } from 'react-native-permissions';
import Button, {Variant} from '../Button';
import IOSSettingsModalProps from '../../types/IOSSettingsModalProps';


export const IOSSettingsModal: FC <IOSSettingsModalProps> = ({isVisible, setIsVisible}) => {

  const onCloseModal = () => {
    setIsVisible(false);
  };

  return (
    <Modal isVisible={isVisible} onBackdropPress={onCloseModal}>
      <View style={styles.openSettingsModal}>
        <Text style={styles.settingsModalTitle}>{'iosCameraPermissionsTitle'}</Text>
        <View style={styles.settingsModalButtonsWrapper}>
          <Button
            variant={Variant.SECONDARY_OUTLINED_SMALL}
            label={'Cancel'}
            onPress={onCloseModal}
          />
          <Button
            variant={Variant.SECONDARY_SMALL}
            label={'Settings'}
            onPress={() => {
              openSettings();
              onCloseModal();
            }}
          />
        </View>
      </View>
    </Modal>
  );
};
