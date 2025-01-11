import { get as _get } from 'lodash';
import { useState, useContext } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';
import {
  Asset,
  CameraOptions,
  ImageLibraryOptions,
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import AddFilesPlaceholderContext from '../../screens/OpenCameraGalleryScreen/contexts/AddFilesPlaceholderContext';

interface Output {
  showCamera: () => void;
  showVideoRecorder: () => void;
  showPhotoGalleryPicker: () => void;
  showPhotoAndVideoGalleryPicker: () => void;
  setSelectedImageFile: (asset: Asset) => void;
  selectedImage: Asset;
  selectedImageFile: Asset;
  photoSelectModalVisible: boolean;
  iosSettingsModalVisible: boolean;
  setIosSettingsModalVisible: (visible: boolean) => void;
}

const photoLibraryOptions: ImageLibraryOptions = {
  mediaType: 'photo',
  selectionLimit: 1,
};

const photoAndVideoLibraryOptions: ImageLibraryOptions = {
  mediaType: 'mixed',
  selectionLimit: 1,
};

const takePhotoOptions: CameraOptions = {
  mediaType: 'photo',
  presentationStyle: 'fullScreen',
  saveToPhotos: true,
};

const recordVideoOptions: CameraOptions = {
  mediaType: 'video',
  presentationStyle: 'fullScreen',
  saveToPhotos: true,
};
export const useImagePicker = (): Output => {
  const {
    iosSettingsModalVisible,
    setIosSettingsModalVisible,
  } = useContext(AddFilesPlaceholderContext);
  const [selectedImage, setSelectedImage] = useState<Asset>({});
  const [selectedImageFile, setSelectedImageFile] = useState<Asset>({});
  const [photoSelectModalVisible, setPhotoSelectVisible] = useState<boolean>(false);

  const handlePermissionDeniedOrBlocked = () => {
    if (Platform.OS === 'ios') setIosSettingsModalVisible(true);
  };

  const launchCameraFun = (options: CameraOptions) => {
    const permissionToBeChecked =
      Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA;
    check(permissionToBeChecked)
      .then((result) => {
        switch (result) {
          case RESULTS.DENIED:
            request(PERMISSIONS.IOS.CAMERA).then((permissionResult) => {
              if (permissionResult === 'granted') {
                launchCamera(options, launchCameraCallback);
                return;
              }
              handlePermissionDeniedOrBlocked();
            });
            break;
          case RESULTS.GRANTED:
            launchCamera(options, launchCameraCallback);
            break;
          case RESULTS.BLOCKED:
            // in case of access camera access not granted or manually blocked
            handlePermissionDeniedOrBlocked();
            break;
          default:
            break;
        }
      })
      .catch((error) => {
      });
  };

  const launchCameraCallback = (response: ImagePickerResponse) => {
    const { assets = [] } = response;
    if (assets && assets.length) {
      const { uri = '', fileSize = '' } = _get(assets, '[0]', {});
      const source: any = { uri: uri };
      setSelectedImageFile(_get(assets, '[0]', {}));
      setSelectedImage(source);
      setPhotoSelectVisible(true);
    }
  };

  const requestCameraPermission = async (options: CameraOptions) => {
    try {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        launchCameraFun(options);
      } else {
      }
    } catch (error) {
    }
  };

  const showCamera = () => {
    setTimeout(() => {
      if (Platform.OS === 'ios') {
        launchCameraFun(takePhotoOptions);
      } else {
        requestCameraPermission(takePhotoOptions);
      }
    }, 300);
  };

  const showVideoRecorder = () => {
    setTimeout(() => {
      if (Platform.OS === 'ios') {
        launchCameraFun(recordVideoOptions);
      } else {
        requestCameraPermission(recordVideoOptions);
      }
    }, 300);
  };

  const showGalleryPicker = (imageLibraryOptions: ImageLibraryOptions) => {
    setTimeout(() => {
      launchImageLibrary(imageLibraryOptions, (response) => {
        const { assets = [] } = response;
        if (assets && assets.length) {
          const { uri = '', fileSize = '' } = _get(assets, '[0]', {});
          const source: any = { uri: uri };
          setSelectedImageFile(_get(assets, '[0]', {}));
          setSelectedImage(source);
          setPhotoSelectVisible(true);
        }
      });
    }, 500);
  };

  const showPhotoGalleryPicker = () => showGalleryPicker(photoLibraryOptions);

  const showPhotoAndVideoGalleryPicker = () => showGalleryPicker(photoAndVideoLibraryOptions);

  return {
    setSelectedImageFile,
    showCamera,
    showVideoRecorder,
    showPhotoGalleryPicker,
    showPhotoAndVideoGalleryPicker,
    selectedImage,
    selectedImageFile,
    photoSelectModalVisible,
    iosSettingsModalVisible,
    setIosSettingsModalVisible,
  };
};
