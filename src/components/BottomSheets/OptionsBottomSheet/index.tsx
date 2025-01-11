import React, { forwardRef } from 'react';
import { TouchableOpacity, View } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import BottomSheetContainer from '../components/BottomSheetContainer';
import DefaultOptionsBottomSheet from '../components/DefaultOptionBottomSheet';
import OptionsBottomSheetItem from '../types/OptionsBottomSheetItem';
import { OptionsBottomSheetProps } from '../types/OptionsBottomSheetProps';
import styles from './styles';
import { CustomText } from '../../CustomText';
import Icon from 'react-native-vector-icons/FontAwesome';


const OptionsBottomSheet = forwardRef<typeof RBSheet, OptionsBottomSheetProps>((props, ref) => {
  const handleCloseButtonPress = () => ref?.current?.close();

  const renderDefaultOptions = (options: OptionsBottomSheetItem[]) =>
    options?.map((item, index) => <DefaultOptionsBottomSheet key={index} options={item} />);

  return (
    <BottomSheetContainer ref={ref} onClose={props.onClose}>
      <View style={styles.header}>
        <View style={styles.headerTitleAndCloseButtonContainer}>
          <CustomText style={styles.title} numberOfLines={1}>
            {props.title}
          </CustomText>
          <TouchableOpacity style={styles.closeButton} onPress={handleCloseButtonPress}>
            <Icon
                      name={'close'}
                      size={12}
                      color={'blank'}
                      />
          </TouchableOpacity>
        </View>
        {props.description && <CustomText style={styles.description}>{props.description}</CustomText>}
      </View>
      {/* This conditional rendering approach allows for creating multiple variants
        under the same component. Additional variants can be added here using
        similar conditional checks.
      */}
      <View style={styles.optionsContainer}>
        {props.variant === 'default' && renderDefaultOptions(props.options)}
      </View>
    </BottomSheetContainer>
  );
});

export default OptionsBottomSheet;
