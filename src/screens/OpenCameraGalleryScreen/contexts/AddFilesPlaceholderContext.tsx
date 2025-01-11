import React, { createContext, FC, ReactNode, useRef, useState } from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import MediaFile from '../../../types/MediaFile';
import AddFilesPlaceholderContextType from '../../../types/AddFilesPlaceholderContextType';

const initialData: AddFilesPlaceholderContextType = {
  refRBSheet1: { current: null },
  refRBSheet2: { current: null },
  placeholderIndex: -1,
  setPlaceholderIndex: () => {},
  files: [null, null, null],
  setFiles: () => {},
  isFileSizeLimitExceeded: false,
  setIsFileSizeLimitExceeded: () => {},
  iosSettingsModalVisible: false,
  setIosSettingsModalVisible: () => {},
};

export const AddFilesPlaceholderContext = createContext<AddFilesPlaceholderContextType>(initialData);

interface AddFilesPlaceholderContextProviderProps {
  children: ReactNode;
}

export const AddFilesPlaceholderContextProvider: FC<AddFilesPlaceholderContextProviderProps> = ({ children }) => {
  const refRBSheet1 = useRef<typeof RBSheet | null>(null);
  const refRBSheet2 = useRef<typeof RBSheet | null>(null);
  const [placeholderIndex, setPlaceholderIndex] = useState<number>(-1);
  const [files, setFiles] = useState<(MediaFile | null)[]>([null, null, null]);
  const [isFileSizeLimitExceeded, setIsFileSizeLimitExceeded] = useState(false);
  const [iosSettingsModalVisible, setIosSettingsModalVisible] = useState(false);

  const value: AddFilesPlaceholderContextType = {
    refRBSheet1,
    refRBSheet2,
    placeholderIndex,
    setPlaceholderIndex,
    files,
    setFiles,
    isFileSizeLimitExceeded,
    setIsFileSizeLimitExceeded,
    iosSettingsModalVisible,
    setIosSettingsModalVisible,
  };

  return (
    <AddFilesPlaceholderContext.Provider value={value}>
      {children}
    </AddFilesPlaceholderContext.Provider>
  );
};

export default AddFilesPlaceholderContext;
