import React, { forwardRef, useState } from 'react';
import { LayoutChangeEvent, Platform, View, ScrollView, Dimensions, SafeAreaView } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import BottomSheetContainerProps from '../../types/BottomSheetContainerProps';
import styles from './styles';
import Spacing from '../../../../resources/Spacing';

const BottomSheetContainer = forwardRef<RBSheet, BottomSheetContainerProps>((props, ref) => {
  const [contentHeight, setContentHeight] = useState(30);
  const [isContentReady, setIsContentReady] = useState(false);

  const onLayout = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    const finalContentHeight = Math.ceil(height);
    const deviceHeight = Dimensions.get('window').height;
    const maxHeight =
      finalContentHeight < deviceHeight * 0.9 ? finalContentHeight : deviceHeight * 0.9;
    contentHeight < maxHeight && setContentHeight(maxHeight);
    setIsContentReady(true);
  };

  const renderContent = () => (
    <SafeAreaView onLayout={onLayout}>
      <ScrollView>{props.children}</ScrollView>
    </SafeAreaView>
  );
  if (!isContentReady) {
    return <View style={styles.hiddenContent}>{renderContent()}</View>;
  }

  return (
    <RBSheet
      ref={ref}
      customStyles={{ container: styles.bottomSheet }}
      height={contentHeight + (Platform.OS === 'ios' ? Spacing.xl : Spacing.m)}
      closeOnPressMask={false}
      closeOnPressBack={false}
      onClose={props.onClose}
    >
      {renderContent()}
    </RBSheet>
  );
});

export default BottomSheetContainer;
