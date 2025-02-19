import { Thumbnail } from 'react-native-create-thumbnail';
import { Asset } from 'react-native-image-picker';

interface MediaFile {
  asset?: Asset;
  thumbnail?: Thumbnail;
  fileUrl?: string;
}

export default MediaFile;
