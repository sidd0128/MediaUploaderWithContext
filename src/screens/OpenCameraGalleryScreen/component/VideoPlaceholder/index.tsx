import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import VideoPlaceholderContainerProps from '../../../../types/VideoPlaceholderContainerProps';
import colors from '../../../../constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const VideoPlaceholder: FC<VideoPlaceholderContainerProps> = (props) => (
  <TouchableOpacity
    style={[styles.container, { height: props.height, width: props.width }]}
    disabled={props.variant === 'nonPressable'}
    onPress={props.variant === 'pressable' ? props.onPress : () => {}}
  >
    <Icon
                          name={'camera'}
                          size={18}
                          color={colors.white}
                          />
    <Text style={styles.text}>
      {'Video Placeholder Text'}
    </Text>
  </TouchableOpacity>
);

export default VideoPlaceholder;
