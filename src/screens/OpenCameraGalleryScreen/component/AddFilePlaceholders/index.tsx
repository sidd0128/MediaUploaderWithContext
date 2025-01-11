import React, { FC } from 'react';
import { View } from 'react-native';
import lastFileIndex from '../../constants/lastFileIndex';
import useAddFiles from '../../hooks/useAddFiles';
import AddFilePlaceholder from '../AddFilePlaceholder';
import VideoPlaceholder from '../VideoPlaceholder';
import styles from './styles';
import MediaFile from '../../../../types/MediaFile';
import { isVideoByUrl } from '../../../../helpers/isVideo';
import getAddFilePlaceholderSize from '../../../../helpers/getAddFilePlaceholderSize';

const AddFilePlaceholders: FC = () => {
  const { height, width } = getAddFilePlaceholderSize();

  const { files,refRBSheet2, refRBSheet1, setPlaceholderIndex } = useAddFiles();

  const handleAddFilePlaceholderPress = (index: number) => {
    setPlaceholderIndex(index);
    if (files[index]) {
      refRBSheet2.current?.open();
    } else {
      refRBSheet1.current?.open();
    }
  };

  const renderAddFilePlaceholder = (item: MediaFile | null, index: number) => {
    const handlePress = () => handleAddFilePlaceholderPress(index);

    return (
      <View key={index} style={index !== lastFileIndex && styles.divider}>
        <AddFilePlaceholder height={height} width={width} file={item} onPress={handlePress} />
      </View>
    );
  };

  const renderVideoPlaceholder = (index: number) => {
    const handlePress = () => handleAddFilePlaceholderPress(index);

    return (
      <View key={index} style={index !== lastFileIndex && styles.divider}>
        <VideoPlaceholder variant="pressable" height={height} width={width} onPress={handlePress} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {files.map((item, index) =>
        item?.fileUrl && isVideoByUrl(item?.fileUrl)
          ? renderVideoPlaceholder(index)
          : renderAddFilePlaceholder(item, index)
      )}
    </View>
  );
};

export default AddFilePlaceholders;
