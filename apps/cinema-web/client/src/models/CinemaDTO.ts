export interface ICinemaDTO {
  id: number;
  name: string;
  sessions: ISessionDTO[];
}

export interface IDateDTO {
  dates: number;
  halls: ICinemaDTO[];
}

export interface ISessionDTO {
  id: number;
  timeStart: number;
}