import { useState } from 'react';
import { Platform } from 'react-native';
import { useImageResize } from './imageResize';
import { isVideoByType } from '../../helpers/isVideo';
import File from '../../services/files';
import UploadImageResult from '../../types/UploadImageResult';
import UploadImageProps from '../../types/UploadImageProps';

export const useUploadImage = (): UploadImageResult => {
  const { resizeImage } = useImageResize();
  const [imageUri, setImageUri] = useState<string>();

  const uploadImage = async ({
    selectedImageFile,
    moduleName,
  }: UploadImageProps): Promise<{file_url: string}> => {
    const formData = new FormData();

    if (selectedImageFile.type && isVideoByType(selectedImageFile.type)) {
      formData.append('file', {
        uri:
          Platform.OS === 'android'
            ? selectedImageFile.uri
            : selectedImageFile.uri?.replace('file://', ''),
        name: selectedImageFile.fileName ?? `${moduleName || 'image'}-${new Date().getTime()}`,
        type: selectedImageFile.type,
      });
    } else {
      try {
        const imageResized = await resizeImage({ uri: selectedImageFile.uri ?? '' });

        formData.append('file', {
          uri:
            Platform.OS === 'android'
              ? imageResized?.uri
              : imageResized?.uri.replace('file://', ''),
          name: imageResized?.name ?? `${moduleName || 'image'}-${new Date().getTime()}`,
          type: selectedImageFile.type,
        });
      } catch (error) {
      }
    }

    return await File.uploadFile(formData)
      .then((response: any) => {
        setImageUri(response);
        return response;
      })
      .catch((error) => {
        return error;
      });
  };

  return {
    uploadImage,
    imageUri,
  };
};
