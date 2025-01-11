import { useState } from 'react';
import ImageResizer from 'react-native-image-resizer';

type ImageResize = {
  uri: string;
  originalRotation?: number;
};

interface Output {
  resizeImage: ({ uri, originalRotation }: ImageResize) => Promise<Response> | void;
  imageObject: Response | undefined;
}

interface Response {
  uri: string;
  path: string;
  name: string;
  size: any;
}

export const useImageResize = (): Output => {
  const [imageObject, setImageObject] = useState<Response>();

  const resizeImage = async ({ uri, originalRotation }: ImageResize): Promise<Response> => {
    return ImageResizer.createResizedImage(uri, 1000, 1000, 'JPEG', 60, originalRotation || 0)
      .then((response: Response) => {
        setImageObject(response);
        return response;
      })
      .catch((error) => {
        return error;
      });
  };

  return {
    resizeImage,
    imageObject,
  };
};
