import Button, { Variant as ButtonVariant } from '../../Button';
import React, { FC, useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { InfoBoxVariantStyles } from '../InfoBoxVariantStyles';
import InfoBoxProps from '../types/InfoBoxProps';
import styles from './styles';
import { CustomText } from '../../CustomText';
import colors from '../../../constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconSize from '../../../resources/IconSize';



const InfoBox: FC<InfoBoxProps> = (props) => {
  const visibilityTime = 5000;

  const [isVisible, setIsVisible] = useState(props.isVisible);

  useEffect(() => setIsVisible(props.isVisible), [props.isVisible]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (props.isSelfDisappearing && isVisible) {
      timeout = setTimeout(() => {
        setIsVisible(false);
        props.onClose?.();
      }, visibilityTime);
    }

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  const handleCloseButtonPress = () => {
    setIsVisible(false);
    props.onClose?.();
  };

  return (
    <>
      {isVisible && (
        <View
          style={[
            styles.container,
            {
              backgroundColor: InfoBoxVariantStyles[props.variant].backgroundColor,
            },
          ]}
        >
          <View style={styles.titleContainer}>
            <Icon
                      name={InfoBoxVariantStyles[props.variant].svgIconName}
                      size={IconSize.m}
                      color={colors.black0}
                      />
            <CustomText style={styles.title} numberOfLines={1}>
              {props.title}
            </CustomText>
          </View>
          <CustomText>{props.message}</CustomText>
          {props.hasCloseButton && (
            <TouchableOpacity style={styles.closeButtonContainer} onPress={handleCloseButtonPress}>
              <Icon
                      name={'close'}
                      size={IconSize.s}
                      color={'blank'}
                      />
            </TouchableOpacity>
          )}
          {props.button && (
            <View style={styles.buttonContainer}>
              <Button
                variant={ButtonVariant.SECONDARY_SMALL}
                label={props.button.label ?? ''}
                onPress={props.button.onPress}
              />
            </View>
          )}
        </View>
      )}
    </>
  );
};

export default InfoBox;
