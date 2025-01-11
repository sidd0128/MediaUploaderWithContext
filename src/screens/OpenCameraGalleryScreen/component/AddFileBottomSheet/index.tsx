import React, { forwardRef } from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import useAddFiles from '../../hooks/useAddFiles';
import OptionsBottomSheet from '../../../../components/BottomSheets/OptionsBottomSheet';

const AddFileBottomSheet = forwardRef<typeof RBSheet>((_, ref) => {
  const { handleSelectFileFromLibraryPress, handleTakePhotoPress, handleRecordVideoPress } =
    useAddFiles();

  return (
    <OptionsBottomSheet
      ref={ref}
      variant="default"
      title={'TITLE'}
      options={[
        {
          icon: { name: 'image', height: 20, width: 20 },
          title: 'Open Gallery',
          onPress: handleSelectFileFromLibraryPress,
        },
        {
          icon: { name: 'photo', height: 20, width: 20 },
          title: 'Take Photo',
          onPress: handleTakePhotoPress,
        },
        {
          icon: { name: 'cameraVideo', height: 20, width: 20 },
          title: 'Record Video',
          onPress: handleRecordVideoPress,
        },
      ]}
    />
  );
});

export default AddFileBottomSheet;
