import React, { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';
import DefaultOptionsBottomSheetProps from '../../types/DefaultOptionsBottomSheetProps';
import styles from './styles';
import { CustomText } from '../../../CustomText';
import Icon from 'react-native-vector-icons/FontAwesome';

const DefaultOptionsBottomSheet: FC<DefaultOptionsBottomSheetProps> = (props) => {
  return (
    <View style={styles.optionContainer}>
      <TouchableOpacity style={styles.optionContentContainer} onPress={props.options.onPress}>
        <View style={styles.optionIconContainer}>
        <Icon
          name={'star'}
          size={props.options.icon?.width ?? 24}
          color={props.options.icon?.color ?? 'black'}
          />
        </View>
        <View style={styles.optionTitleAndDescriptionContainer}>
          <CustomText style={styles.optionTitle} numberOfLines={1}>
            {props.options.title}
          </CustomText>
          {props.options.description && (
            <CustomText style={styles.optionDescription} numberOfLines={1}>
              {props.options.description}
            </CustomText>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DefaultOptionsBottomSheet;
