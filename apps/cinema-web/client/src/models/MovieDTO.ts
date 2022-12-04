export interface IMovieDTO {
  name: string;
  id: number;
  description: string;
  nameImg: string;
  trailerURL: string;
  tags: ITagDTO[];
  duration: number;
}
export interface ICreateMovieDTO {
  id: number;
  name: string;
  description: string;
  trailerURL: string;
  duration: number;
  imageName: string;
  imageFile: File | null;
  tags: ITagDTO[];
}

export interface IPreviewMovieDTO {
  id: number;
  name: string;
  nameImg: string;
}

export interface IMovieAdminTable {
  id: number;
  name: string;
}

export interface ITagDTO {
  name: string;
  id: number;
}
