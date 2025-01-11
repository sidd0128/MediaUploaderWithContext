import React, { forwardRef } from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import useAddFiles from '../../hooks/useAddFiles';
import OptionsBottomSheet from '../../../../components/BottomSheets/OptionsBottomSheet';

const FileOptionsBottomSheet = forwardRef<typeof RBSheet>((_, ref) => {
  const { handleRemoveFilePress, handleReplaceFilePress } = useAddFiles();

  return (
    <OptionsBottomSheet
      ref={ref}
      variant="default"
      title={'Title'}
      options={[
        {
          icon: { name: 'image', height: 20, width: 20 },
          title: 'Replace File',
          onPress: handleReplaceFilePress,
        },
        {
          icon: { name: 'trashBin2', height: 20, width: 20 },
          title: 'Delete File',
          onPress: handleRemoveFilePress,
        },
      ]}
      onClose={ref?.current?.close()}
    />
  );
});

export default FileOptionsBottomSheet;
