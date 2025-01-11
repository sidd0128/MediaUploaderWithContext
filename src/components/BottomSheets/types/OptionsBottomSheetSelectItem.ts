interface CommonProps {
  title: string;
  description?: string;
  isSelected: boolean;
}

export type OptionsBottomSheetSelectItem =
  | (CommonProps & {
      variant: 'localIcon';
      iconName: string;
    })
  | (CommonProps & {
      variant: 'remoteIcon';
      iconUrl: string;
    });
