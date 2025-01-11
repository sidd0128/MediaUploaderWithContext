import UploadImageProps from "./UploadImageProps";

export default interface UploadImageResult {
  uploadImage: ({
    selectedImageFile,
    moduleName,
  }: UploadImageProps) => Promise<{file_url: string}>;
  imageUri?: string;
  // eslint-disable-next-line semi
}
