import { MutableRefObject } from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import MediaFile from './MediaFile';

interface AddFilesPlaceholderContextType {
  refRBSheet1: MutableRefObject<typeof RBSheet | null>;
  refRBSheet2: MutableRefObject<typeof RBSheet | null>;
  placeholderIndex: number;
  setPlaceholderIndex: (index: number) => void;
  files: (MediaFile | null)[];
  setFiles: (files: (MediaFile | null)[]) => void;
  isFileSizeLimitExceeded: boolean;
  setIsFileSizeLimitExceeded: (limitExceeded: boolean) => void;
  iosSettingsModalVisible: boolean;
  setIosSettingsModalVisible: (visible: boolean) => void;
}

export default AddFilesPlaceholderContextType;
