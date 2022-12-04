export function parseToMinute (time: string) {
  let timeElements = time.split(':')
  let timeInMinute = parseInt(timeElements[0], 10) * 60 + parseInt(timeElements[1], 10)
  return timeInMinute;
}