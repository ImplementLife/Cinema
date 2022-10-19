export interface IMovieDTO {
  name: string;
  id: number;
  description: string;
  image: string[];
  trailerURL: string;
  tags: ITagDTO[];
  movieDuration: number;
}
export interface ICreateMovieDTO {
  name: string;
  description: string;
  trailerURL: string;
  movieDuration: number;
  image: string[];
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
