interface Props {
    height: number;
    width: number;
  }

  type VideoPlaceholderContainerProps =
    | (Props & {
        variant: "pressable";
        onPress?: () => void;
      })
    | (Props & {
        variant: "nonPressable";
      });

  export default VideoPlaceholderContainerProps;
