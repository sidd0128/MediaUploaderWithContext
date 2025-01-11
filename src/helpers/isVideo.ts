export const isVideoByType = (type: string) => type.includes('video/');

const videoFormats = ['mov', 'mp4', 'webm'];

export const isVideoByUrl = (url: string) =>
  videoFormats.some((format) => url.toLocaleLowerCase().includes(format));
