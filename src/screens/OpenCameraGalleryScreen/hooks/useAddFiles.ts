/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState, useCallback } from 'react';
import { AddFilesPlaceholderContext } from '../contexts/AddFilesPlaceholderContext';
import { useImagePicker } from '../../../hooks/imagePicker/imagePicker';
import { useUploadImage } from '../../../hooks/imageHandler/uploadImage';
import RNFetchBlob from 'rn-fetch-blob';
import MediaFile from '../../../types/MediaFile';
import { isVideoByType } from '../../../helpers/isVideo';
import { createThumbnail } from 'react-native-create-thumbnail';
const useAddFiles = () => {
  const {
    refRBSheet1,
    refRBSheet2,
    placeholderIndex,
    setPlaceholderIndex,
    files,
    setFiles,
    isFileSizeLimitExceeded,
    setIsFileSizeLimitExceeded,
  } = useContext(AddFilesPlaceholderContext);


  const { selectedImageFile, showPhotoAndVideoGalleryPicker, showCamera, showVideoRecorder } =
    useImagePicker();

  const { uploadImage } = useUploadImage();
  const [isLoading, setIsLoading] = useState(false);


const checkIfFileSizeExceedsLimit = useCallback(async (path: string) => {
  const fileSizeLimitInBytes = 8000000;

  try {
    const stats = await RNFetchBlob.fs.stat(path.replace('file:///', ''));
    return +stats.size > fileSizeLimitInBytes;
  } catch (error) {
    console.error('Error checking file size:', error);
    return false;
  }
}, []);



const setFile = useCallback(async () => {
  if (!selectedImageFile || !selectedImageFile.type || !selectedImageFile.uri) {
    return;
  }

  const fileSizeLimitExceeded = await checkIfFileSizeExceedsLimit(selectedImageFile.uri);
  if (fileSizeLimitExceeded) {
    setIsFileSizeLimitExceeded(true);
    return;
  }

  const mediaFile: MediaFile = {
    asset: selectedImageFile,
  };

  let thumbnail;
  if (selectedImageFile.type && isVideoByType(selectedImageFile.type)) {
    thumbnail = await createThumbnail({
      url: selectedImageFile?.uri,
    });

    mediaFile.thumbnail = thumbnail;
  }
  const _files = [...files];
  _files[placeholderIndex] = mediaFile;
  setFiles(_files);
}, [selectedImageFile, files, placeholderIndex, setFiles, setIsFileSizeLimitExceeded, checkIfFileSizeExceedsLimit]);


  useEffect(() => {
    try {
      setFile();
    } catch (error) {
      console.error('Error in useEffect while setting the file:', error);
    }
  }, [selectedImageFile]);




  const uploadAllFiles = async () => {
    setIsLoading(true);
    const uploadPromises = files
      .filter((file) => file !== null)
      .map((file) => uploadImage({ selectedImageFile: file?.asset }));

    const response = await Promise.all(uploadPromises);

    const result = response.map((file) => file.file_url);

    setIsLoading(false);

    return result;
  };
  const updateFiles = async () => {
    setIsLoading(true);

    const temp = [...files];

    for (let i = 0; i < temp.length; i++) {
      if (temp[i] !== null && temp[i]?.asset !== undefined) {
        const response = await uploadImage({
          selectedImageFile: temp[i]!.asset
        });

        temp[i]!.fileUrl = response.file_url;
      }
    }

    const result = temp.filter((file) => file !== null).map((file) => file?.fileUrl);

    setIsLoading(false);

    return result;
  };
  const handleSelectFileFromLibraryPress = () => {
    refRBSheet1.current?.close();
    showPhotoAndVideoGalleryPicker();
  };

  const handleTakePhotoPress = () => {
    refRBSheet1.current?.close();
    showCamera();
  };

  const handleRecordVideoPress = () => {
    refRBSheet1.current?.close();
    showVideoRecorder();
  };

  const handleReplaceFilePress = () =>{
    refRBSheet2.current?.close();
    showPhotoAndVideoGalleryPicker();
  };


  const handleRemoveFilePress = () => {
    refRBSheet2.current?.close();
    const _files = [...files];
    _files[placeholderIndex] = null;
    setFiles(_files);
  };

  return {
    refRBSheet1,
    refRBSheet2,
    placeholderIndex,
    setPlaceholderIndex,
    files,
    setFiles,
    isFileSizeLimitExceeded,
    setIsFileSizeLimitExceeded,
    handleSelectFileFromLibraryPress,
    handleTakePhotoPress,
    handleRecordVideoPress,
    handleRemoveFilePress,
    handleReplaceFilePress,
    uploadAllFiles,
    updateFiles,
    isLoading,
  };
};

export default useAddFiles;
