import { ITagDTO } from '../../models/MovieDTO';

export const parseDuration = (value: number) => {
  const hours = Math.floor(value / 60);
  const minutes = value % 60;
  return `${padToTwoDigits(hours)}:${padToTwoDigits(minutes)}`;
}
const padToTwoDigits = (num: number) => {
  return num.toString().padStart(2, '0');
}

export const parseTags = (tags: ITagDTO[]) => {
  const tagNames: string[] = [];
  tags.map(tag => tagNames.push(tag.name))
  return tagNames.join(', ')
}