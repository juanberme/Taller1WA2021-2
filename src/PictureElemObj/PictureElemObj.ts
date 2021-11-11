import { TagOptions } from "../Tag/TagOptions";

export type PicturesElemArray = {
    id: number;
    PictureImg: string;
    PictureLikes: number;
    PictureTags: TagOptions[];
    PictureDate: string;
    AlbumId: number;
  }