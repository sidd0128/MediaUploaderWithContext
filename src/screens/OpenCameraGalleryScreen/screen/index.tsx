import React, { FC, useRef, useState } from 'react';
import styles from './styles';
import { View, Text } from 'react-native';
import Button, { Variant } from '../../../components/Button';
import { AddFilesPlaceholderContextProvider } from '../contexts/AddFilesPlaceholderContext';
import useAddFiles from '../hooks/useAddFiles';
import AddFilePlaceholders from '../component/AddFilePlaceholders';
import AddFileBottomSheet from '../component/AddFileBottomSheet';
import FileOptionsBottomSheet from '../component/FileOptionsBottomSheet';
import { IOSSettingsModal } from '../../../components/IOSSettingsModal';
import InfoBox from '../../../components/InfoBox/InfoBox';
import { InfoBoxVariant } from '../../../components/InfoBox';
import { useImagePicker } from '../../../hooks/imagePicker/imagePicker';

const OpenCameraGalleryScreenContent: FC = () => {
  const { files, refRBSheet1, refRBSheet2, uploadAllFiles, isFileSizeLimitExceeded , setIsFileSizeLimitExceeded} = useAddFiles();
   const { iosSettingsModalVisible, setIosSettingsModalVisible } =
      useImagePicker();
      const [showNoFileSelectedInfo, setShowNoFileSelectedInfo] = useState(false);
  const uploadedFiles = useRef<string[]>([]);

  const handleSendButtonPress = async () => {
    if (files.some((file) => file?.asset !== undefined || file?.fileUrl !== undefined)) {
      const uploaded = await uploadAllFiles();
      uploadedFiles.current = uploaded;
    }else{
      setShowNoFileSelectedInfo(true);
    }
  };
  const handleInboxCloseButtonclick = () => {
    setIsFileSizeLimitExceeded(false);
    setShowNoFileSelectedInfo(false);

  };

  const renderInfoBox = (variant: InfoBoxVariant, title: string, message: string, isSelfDisappearing: boolean) => {
    return (
      <InfoBox
        variant={variant}
        title={title}
        message={message}
        isSelfDisappearing={isSelfDisappearing}
        isVisible={isFileSizeLimitExceeded || showNoFileSelectedInfo}
        button={{
          label: 'OK',
          onPress: handleInboxCloseButtonclick,
        }}
      />
    );
  };
  const renderAddFileSection = () => (
    <>
      <View style={styles.addFileTextsContainer}>
        <Text style={styles.addFilesLabel}>Add images/videos</Text>
        <Text style={styles.addFilesFileSizeLimitText}>Max size 8 MB</Text>
      </View>
      <AddFilePlaceholders />
    </>
  );

  return (
    <View style={styles.container}>
      {renderAddFileSection()}

      {renderInfoBox(isFileSizeLimitExceeded ? InfoBoxVariant.WARNING : InfoBoxVariant.ERROR,isFileSizeLimitExceeded ? 'Warning' : 'Error',isFileSizeLimitExceeded ?'Image is greater than 8 MB': 'No files selected', false)}
      <View style={styles.buttonContainer}>
        <Button
          variant={Variant.PRIMARY}
          label="Upload file"
          onPress={handleSendButtonPress}
        />
      </View>
      <IOSSettingsModal
        isVisible={iosSettingsModalVisible}
        setIsVisible={setIosSettingsModalVisible}
      />
      <AddFileBottomSheet ref={refRBSheet1} />
      <FileOptionsBottomSheet ref={refRBSheet2} />
    </View>
  );
};

const OpenCameraGalleryScreen: FC = () => {
  return (
    <AddFilesPlaceholderContextProvider>
      <OpenCameraGalleryScreenContent />
    </AddFilesPlaceholderContextProvider>
  );
};

export default OpenCameraGalleryScreen;
